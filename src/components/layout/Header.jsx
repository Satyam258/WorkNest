import { Container } from '../ui/Container.jsx'

const nav = [
  { label: 'Product', href: '#product' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-nest-border/60 bg-nest-bg/85 shadow-[0_1px_0_0_rgba(255,255,255,0.03)] backdrop-blur-md backdrop-saturate-150">
      <Container className="flex h-16 items-center justify-between gap-6">
        <a
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-nest-text transition-opacity duration-200 ease-out hover:opacity-90"
        >
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-nest-primary to-nest-accent text-sm font-bold text-white shadow-md shadow-nest-primary/20"
            aria-hidden
          >
            W
          </span>
          WorkNest
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-small text-nest-muted transition-colors duration-200 ease-out hover:text-nest-text"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#sign-in"
            className="hidden text-small font-medium text-nest-muted transition-colors duration-200 ease-out hover:text-nest-text sm:inline"
          >
            Sign in
          </a>
          <a
            href="#hero"
            className="rounded-lg border border-transparent bg-gradient-to-br from-nest-primary via-[#7050F0] to-[#5A3FD6] px-4 py-2 text-small font-medium text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_8px_28px_-12px_rgba(124,92,255,0.5)] transition-[transform,box-shadow,filter] duration-200 ease-out will-change-transform hover:scale-[1.02] hover:brightness-105 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16),0_12px_40px_-10px_rgba(124,92,255,0.62),0_0_28px_-8px_rgba(124,92,255,0.35)] active:scale-[0.98] motion-reduce:hover:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nest-primary focus-visible:ring-offset-2 focus-visible:ring-offset-nest-bg"
          >
            Get started
          </a>
        </div>
      </Container>
    </header>
  )
}
