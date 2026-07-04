/* Decorative SVG motifs, Ease-reference style. Always render these in normal
   document flow inside their own container — never absolutely positioned
   across a section (that caused text-overlap bugs in the previous build). */

export function ConvergingLines({ className = "" }: { className?: string }) {
  const ys = [10, 40, 70, 100, 130, 160, 190];
  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 1200 200"
      fill="none"
      preserveAspectRatio="none"
    >
      {ys.map((y) => (
        <path
          key={y}
          d={`M0 ${y} H620 C740 ${y}, 760 100, 880 100 H1200`}
          stroke="currentColor"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          pathLength={1}
        />
      ))}
    </svg>
  );
}

export function ArcLines({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      preserveAspectRatio="xMaxYMax meet"
    >
      {[80, 140, 200, 260, 320, 380].map((r) => (
        <circle
          key={r}
          cx="400"
          cy="400"
          r={r}
          stroke="currentColor"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}
