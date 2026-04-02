"use client";

type CinematicBackgroundProps = {
  children: React.ReactNode;
  backgroundImage?: string;
  backgroundPosition?: string;
};

export function CinematicBackground({
  children,
  backgroundImage = "/backgrounds/upscalemedia-transformed.webp",
  backgroundPosition = "72% center",
}: CinematicBackgroundProps) {
  return (
    <div className="cinematic-bg relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: `url("${backgroundImage}")`, backgroundPosition }}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
