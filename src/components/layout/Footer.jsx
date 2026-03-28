import { Container } from '../ui/Container.jsx'

export function Footer() {
  return (
    <footer className="border-t border-nest-border/40 bg-gradient-to-b from-nest-surface/35 via-nest-surface/25 to-nest-bg py-10">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-center text-small text-nest-muted sm:text-left">
          © {new Date().getFullYear()} WorkNest. All rights reserved.
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-6 text-small text-nest-muted">
          <li>
            <a href="#privacy" className="transition-colors duration-200 ease-out hover:text-nest-text">
              Privacy
            </a>
          </li>
          <li>
            <a href="#terms" className="transition-colors duration-200 ease-out hover:text-nest-text">
              Terms
            </a>
          </li>
          <li>
            <a href="#contact" className="transition-colors duration-200 ease-out hover:text-nest-accent">
              Contact
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  )
}
