type WaveDividerProps = {
  className?: string;
  flip?: boolean;
};

export function WaveDivider({ className = "", flip = false }: WaveDividerProps) {
  return (
    <div className={`pointer-events-none relative w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        className={`h-24 w-full md:h-32 ${flip ? "rotate-180" : ""}`}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0 96L48 90.7C96 85 192 75 288 80C384 85 480 107 576 122.7C672 139 768 149 864 133.3C960 117 1056 75 1152 58.7C1248 43 1344 53 1392 58.7L1440 64V180H1392C1344 180 1248 180 1152 180C1056 180 960 180 864 180C768 180 672 180 576 180C480 180 384 180 288 180C192 180 96 180 48 180H0V96Z"
          fill="#f4f1f3"
        />
        <path
          d="M0 128L48 120C96 112 192 96 288 96C384 96 480 112 576 122.7C672 133 768 139 864 128C960 117 1056 91 1152 80C1248 69 1344 75 1392 77.3L1440 80V180H1392C1344 180 1248 180 1152 180C1056 180 960 180 864 180C768 180 672 180 576 180C480 180 384 180 288 180C192 180 96 180 48 180H0V128Z"
          fill="rgba(255,255,255,0.7)"
        />
      </svg>
    </div>
  );
}
