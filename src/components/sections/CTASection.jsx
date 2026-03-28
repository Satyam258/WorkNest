import { motion } from 'framer-motion'
import { Button } from '../ui/Button.jsx'
import { Container } from '../ui/Container.jsx'

const ease = [0.22, 1, 0.36, 1]

export function CTASection() {
  return (
    <section
      id="cta"
      className="relative scroll-mt-20 overflow-hidden border-t border-nest-primary/20 bg-[#05070D] py-24 sm:py-28 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-20%,rgba(124,92,255,0.18),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_80%,rgba(34,211,238,0.1),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-nest-primary/[0.06] via-transparent to-nest-accent/[0.05]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-8 top-1/2 h-[min(420px,55vw)] -translate-y-1/2 rounded-full bg-nest-primary/10 blur-[100px] sm:inset-x-16"
        aria-hidden
      />

      <Container className="relative">
        <motion.div
          className="mx-auto max-w-3xl rounded-3xl border border-white/[0.08] bg-nest-surface/20 px-6 py-14 text-center shadow-[0_0_0_1px_rgba(124,92,255,0.08),0_40px_100px_-48px_rgba(124,92,255,0.35),inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-sm sm:px-10 sm:py-16 lg:px-14 lg:py-20"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease }}
        >
          <h2 className="text-[clamp(1.75rem,4.5vw,2.75rem)] font-extrabold leading-[1.08] tracking-tight text-nest-text">
            Start managing your work smarter{' '}
            <span className="bg-gradient-to-r from-nest-primary via-[#A78BFA] to-nest-accent bg-clip-text text-transparent">today</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-nest-muted sm:text-xl sm:leading-relaxed">
            Join teams that are already shipping faster with WorkNest.
          </p>

          <motion.div
            className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, ease, delay: 0.1 }}
          >
            <Button
              href="#hero"
              className="w-full min-h-[3rem] px-8 text-base font-semibold shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_12px_44px_-12px_rgba(124,92,255,0.6)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_18px_56px_-10px_rgba(124,92,255,0.75),0_0_48px_-12px_rgba(124,92,255,0.45)] sm:w-auto sm:min-w-[13rem]"
            >
              Start Free Trial
            </Button>
            <Button
              href="#contact"
              variant="ghost"
              className="w-full min-h-[3rem] border-nest-border/80 bg-nest-bg/30 px-8 text-base font-semibold hover:border-nest-accent/35 hover:shadow-[0_0_36px_-12px_rgba(34,211,238,0.2)] sm:w-auto sm:min-w-[13rem]"
            >
              Book a Demo
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
