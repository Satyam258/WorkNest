const variants = {
  primary:
    'border border-transparent bg-gradient-to-br from-nest-primary via-[#7050F0] to-[#5A3FD6] text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_10px_36px_-14px_rgba(124,92,255,0.55)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18),0_14px_48px_-10px_rgba(124,92,255,0.7),0_0_0_1px_rgba(124,92,255,0.25)] hover:brightness-[1.05] focus-visible:ring-nest-primary',
  ghost:
    'border border-nest-border/90 bg-nest-surface/20 text-nest-text shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] hover:border-nest-primary/50 hover:bg-nest-surface/85 hover:text-nest-text hover:shadow-[0_0_28px_-10px_rgba(124,92,255,0.35),inset_0_1px_0_0_rgba(255,255,255,0.06)] focus-visible:ring-nest-primary',
  accent:
    'bg-nest-accent/10 text-nest-accent ring-1 ring-nest-accent/40 hover:bg-nest-accent/20 focus-visible:ring-nest-accent',
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-small font-medium transition-[color,background-color,border-color,transform,box-shadow,filter] duration-200 ease-out will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-nest-bg hover:scale-[1.02] active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:scale-100 disabled:pointer-events-none disabled:opacity-50 disabled:hover:scale-100'

export function Button({ variant = 'primary', className = '', type = 'button', href, children, ...props }) {
  const classes = `${base} ${variants[variant] ?? variants.primary} ${className}`.trim()
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
