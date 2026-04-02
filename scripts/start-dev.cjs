const { spawn, spawnSync } = require("node:child_process");

const nextBin = require.resolve("next/dist/bin/next");
const extraArgs = process.argv.slice(2);
const port = process.env.PORT || "3000";
const bundlerFlag = process.env.NEXT_DEV_BUNDLER === "turbopack" ? "--turbopack" : "--webpack";

const env = {
  ...process.env,
  WATCHPACK_POLLING: process.env.WATCHPACK_POLLING || "true",
  CHOKIDAR_USEPOLLING: process.env.CHOKIDAR_USEPOLLING || "true",
};

function listeningPidsOnPort(targetPort) {
  if (process.platform !== "win32") {
    return [];
  }

  const result = spawnSync("netstat", ["-ano", "-p", "tcp"], { encoding: "utf8" });
  if (result.status !== 0) {
    return [];
  }

  const pids = new Set();
  const lines = result.stdout.split(/\r?\n/);

  for (const line of lines) {
    if (!line.includes(`:${targetPort}`) || !line.includes("LISTENING")) {
      continue;
    }

    const parts = line.trim().split(/\s+/);
    const pid = parts[parts.length - 1];

    if (pid && pid !== "0" && pid !== String(process.pid)) {
      pids.add(pid);
    }
  }

  return [...pids];
}

function killPids(pids) {
  for (const pid of pids) {
    if (process.platform === "win32") {
      spawnSync("taskkill", ["/PID", pid, "/F"], { stdio: "ignore" });
    } else {
      spawnSync("kill", ["-9", pid], { stdio: "ignore" });
    }
  }
}

const stalePids = listeningPidsOnPort(port);
if (stalePids.length > 0) {
  console.log(`[start-dev] Stopping old process(es) on port ${port}: ${stalePids.join(", ")}`);
  killPids(stalePids);
}

const child = spawn(process.execPath, [nextBin, "dev", bundlerFlag, "-p", port, ...extraArgs], {
  stdio: "inherit",
  env,
});

child.on("exit", (code) => {
  process.exit(code ?? 0);
});

