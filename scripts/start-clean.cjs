const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const port = process.env.PORT || "3000";
const npmCmd = process.platform === "win32" ? "npm.cmd" : "npm";

function log(message) {
  console.log(`[start-clean] ${message}`);
}

function run(command, args) {
  const result = spawnSync(command, args, {
    stdio: "inherit",
    shell: process.platform === "win32",
  });
  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0) {
    process.exit(result.status || 1);
  }
}

function listeningPidsOnPort(targetPort) {
  if (process.platform === "win32") {
    const result = spawnSync("netstat", ["-ano", "-p", "tcp"], { encoding: "utf8" });
    if (result.status !== 0) return [];
    const lines = result.stdout.split(/\r?\n/);
    const pids = new Set();
    for (const line of lines) {
      if (!line.includes(`:${targetPort}`) || !line.includes("LISTENING")) continue;
      const parts = line.trim().split(/\s+/);
      const pid = parts[parts.length - 1];
      if (pid && pid !== "0") pids.add(pid);
    }
    return [...pids];
  }

  const result = spawnSync("lsof", ["-ti", `tcp:${targetPort}`], { encoding: "utf8" });
  if (result.status !== 0) return [];
  return result.stdout
    .split(/\r?\n/)
    .map((pid) => pid.trim())
    .filter(Boolean);
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
  log(`Stopping old process(es) on port ${port}: ${stalePids.join(", ")}`);
  killPids(stalePids);
}

const nextDir = path.join(process.cwd(), ".next");
if (fs.existsSync(nextDir)) {
  log("Removing .next for a clean production build");
  fs.rmSync(nextDir, { recursive: true, force: true });
}

log("Building fresh bundle");
run(npmCmd, ["run", "build"]);

log(`Starting production server on port ${port}`);
run(npmCmd, ["run", "start:raw", "--", "-p", port]);
