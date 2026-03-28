import { AppLayout } from './components/layout/AppLayout.jsx'
import { Container } from './components/ui/Container.jsx'
import { DashboardPreview } from './components/sections/DashboardPreview.jsx'
import { Features } from './components/sections/Features.jsx'
import { Hero } from './components/sections/Hero.jsx'
import { HowItWorks } from './components/sections/HowItWorks.jsx'
import { CTASection } from './components/sections/CTASection.jsx'
import { FAQ } from './components/sections/FAQ.jsx'
import { Testimonials } from './components/sections/Testimonials.jsx'

function App() {
  return (
    <AppLayout>
      <Hero />

      <Features />

      <DashboardPreview />

      <HowItWorks />

      <Testimonials />

      <FAQ />

      <section
        id="pricing"
        className="relative scroll-mt-20 overflow-hidden border-t border-nest-border/30 bg-nest-bg py-20 sm:py-24 lg:py-28"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(124,92,255,0.045),transparent_60%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-nest-surface/[0.08] via-transparent to-nest-bg"
          aria-hidden
        />
        <Container className="relative">
          <div className="mx-auto mb-14 max-w-xl text-center md:mb-16">
            <h2 className="text-[clamp(1.5rem,3.5vw,1.875rem)] font-bold leading-tight tracking-tight text-nest-text">
              Simple pricing
            </h2>
            <p className="mt-5 text-base leading-relaxed text-nest-muted sm:text-[1.0625rem] sm:leading-relaxed">
              Transparent tiers for teams of every size.
            </p>
          </div>
          <ul className="grid gap-6 md:grid-cols-3 md:gap-8">
            {[
              {
                name: 'Free',
                price: '$0',
                period: '/mo',
                blurb: 'For individuals exploring WorkNest.',
                features: ['Up to 3 projects', 'Core boards & tasks', '7-day history'],
                cta: 'Start free',
                href: '#hero',
                featured: false,
              },
              {
                name: 'Pro',
                price: '$19',
                period: '/mo',
                blurb: 'For professionals who need power and polish.',
                features: ['Unlimited projects', 'Advanced automation', 'Priority support'],
                cta: 'Start trial',
                href: '#hero',
                featured: true,
              },
              {
                name: 'Team',
                price: '$49',
                period: '/mo',
                blurb: 'For growing teams that live in WorkNest.',
                features: ['SSO & admin', 'Shared workspaces', 'Audit log'],
                cta: 'Contact sales',
                href: '#contact',
                featured: false,
              },
            ].map((tier) => (
              <li
                key={tier.name}
                className={`flex flex-col rounded-2xl border bg-nest-surface/50 p-7 transition-[transform,box-shadow,border-color] duration-200 ease-out will-change-transform hover:-translate-y-1 hover:scale-[1.012] motion-reduce:hover:scale-100 ${
                  tier.featured
                    ? 'relative border-nest-primary/45 shadow-[0_0_0_1px_rgba(124,92,255,0.22),0_24px_64px_-28px_rgba(124,92,255,0.24),0_0_80px_-36px_rgba(124,92,255,0.18),inset_0_1px_0_0_rgba(255,255,255,0.07)] hover:border-nest-primary/55 hover:shadow-[0_0_0_1px_rgba(124,92,255,0.32),0_36px_80px_-28px_rgba(124,92,255,0.32),0_0_96px_-32px_rgba(124,92,255,0.22),inset_0_1px_0_0_rgba(255,255,255,0.09)]'
                    : 'border-nest-border/90 shadow-[0_20px_48px_-32px_rgba(0,0,0,0.55)] hover:border-nest-border hover:shadow-[0_32px_64px_-30px_rgba(0,0,0,0.65),0_0_48px_-28px_rgba(34,211,238,0.08)]'
                }`}
              >
                {tier.featured ? (
                  <span className="mb-4 inline-flex w-fit rounded-full border border-nest-primary/35 bg-nest-primary/15 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-nest-primary">
                    Most popular
                  </span>
                ) : (
                  <span className="mb-4 block h-[1.375rem]" aria-hidden />
                )}
                <h3 className="text-lg font-semibold text-nest-text">{tier.name}</h3>
                <p className="mt-1 text-small text-nest-muted">{tier.blurb}</p>
                <p className="mt-6 flex items-baseline gap-0.5">
                  <span className="text-3xl font-bold tracking-tight text-nest-text">{tier.price}</span>
                  <span className="text-small text-nest-muted">{tier.period}</span>
                </p>
                <ul className="mt-6 flex flex-col gap-2.5 text-small text-nest-muted">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-nest-accent/80" aria-hidden />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.href}
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-small font-medium transition-[transform,box-shadow,background-color,color,border-color,filter] duration-200 ease-out hover:scale-[1.02] active:scale-[0.98] motion-reduce:hover:scale-100 ${
                    tier.featured
                      ? 'border border-transparent bg-gradient-to-br from-nest-primary via-[#7050F0] to-[#5A3FD6] text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_10px_36px_-14px_rgba(124,92,255,0.5)] hover:brightness-105 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18),0_16px_48px_-12px_rgba(124,92,255,0.65),0_0_40px_-12px_rgba(124,92,255,0.35)]'
                      : 'border border-nest-border/90 bg-nest-bg/40 text-nest-text hover:border-nest-primary/45 hover:bg-nest-surface/85 hover:shadow-[0_0_32px_-12px_rgba(124,92,255,0.28),inset_0_1px_0_0_rgba(255,255,255,0.04)]'
                  }`}
                >
                  {tier.cta}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTASection />
    </AppLayout>
  )
}

export default App
