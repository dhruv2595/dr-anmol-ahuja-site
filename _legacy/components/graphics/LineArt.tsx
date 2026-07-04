// Decorative line-art motifs inspired by the reference design language.
// Purely presentational; hidden from assistive tech.

export function ConcentricCircles({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      {[40, 90, 140, 190, 240, 290, 340].map((r) => (
        <circle
          key={r}
          cx="40"
          cy="200"
          r={r}
          fill="none"
          stroke="var(--color-forest-ink)"
          strokeWidth="1.5"
          opacity="0.55"
        />
      ))}
    </svg>
  );
}

export function NestedCorners({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" aria-hidden="true" className={className}>
      {[0, 44, 88, 132].map((offset) => (
        <path
          key={offset}
          d={`M0 ${20 + offset} H${300 - offset} V300`}
          fill="none"
          stroke="var(--color-forest-ink)"
          strokeWidth="1.5"
          opacity="0.5"
        />
      ))}
    </svg>
  );
}

export function Converge({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 240" aria-hidden="true" className={className}>
      {[20, 60, 100, 140, 180, 220].map((y) => (
        <path
          key={y}
          d={`M0 ${y} C 160 ${y}, 240 120, 400 120`}
          fill="none"
          stroke="var(--color-forest-ink)"
          strokeWidth="1.5"
          opacity="0.5"
        />
      ))}
    </svg>
  );
}

// Diagonal flowing waves — for mist-blue panels (Ease's blue-grey wave motif).
export function Waves({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 300"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      {[-40, -10, 20, 50, 80].map((offset) => (
        <path
          key={offset}
          d={`M-20 ${230 + offset} C 100 ${120 + offset}, 260 ${120 + offset}, 420 ${20 + offset}`}
          fill="none"
          stroke="var(--color-forest-ink)"
          strokeWidth="1.5"
          opacity="0.55"
        />
      ))}
    </svg>
  );
}
