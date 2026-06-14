/**
 * Ambient hero backdrop: panning hairline grid, two drifting accent glows,
 * and edge vignettes that melt into the canvas. Decorative only.
 * All motion is CSS keyframe based, so prefers-reduced-motion freezes it.
 */
export function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* panning technical grid, masked to fade at the edges */}
      <div
        className="bg-grid anim-grid absolute inset-0"
        style={{
          maskImage:
            'radial-gradient(120% 90% at 70% 10%, #000 35%, transparent 78%)',
          WebkitMaskImage:
            'radial-gradient(120% 90% at 70% 10%, #000 35%, transparent 78%)',
        }}
      />

      {/* lime glow, upper right */}
      <div
        className="anim-glow absolute -right-24 -top-32 size-[40rem] rounded-full blur-[120px]"
        style={{
          background:
            'radial-gradient(circle, rgba(198,242,78,0.16) 0%, rgba(198,242,78,0) 65%)',
        }}
      />

      {/* cyan glow, lower left */}
      <div
        className="anim-glow absolute -bottom-40 -left-24 size-[34rem] rounded-full blur-[130px]"
        style={{
          animationDelay: '-6s',
          background:
            'radial-gradient(circle, rgba(34,211,238,0.12) 0%, rgba(34,211,238,0) 65%)',
        }}
      />

      {/* bottom fade into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-canvas" />
    </div>
  )
}
