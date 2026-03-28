import { motion } from 'framer-motion'
import { Button } from '../ui/Button.jsx'
import { Container } from '../ui/Container.jsx'
import { HeroKanbanPreview } from './HeroKanbanPreview.jsx'

const easeOut = [0.22, 1, 0.36, 1]

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden border-b border-nest-border py-16 scroll-mt-20 sm:py-20 lg:py-28">
      {/* Layered depth: top-left purple, bottom-right cyan + soft motion */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_0%_-20%,rgba(124,92,255,0.22),transparent_55%)] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_100%_100%,rgba(34,211,238,0.14),transparent_50%)] opacity-95" />
        <motion.div
          className="absolute -left-[20%] -top-[10%] h-[min(560px,85vw)] w-[min(560px,85vw)] rounded-full bg-nest-primary/30 blur-[110px]"
          animate={{ opacity: [0.32, 0.48, 0.32], scale: [1, 1.06, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-[25%] -right-[15%] h-[min(480px,75vw)] w-[min(480px,75vw)] rounded-full bg-nest-accent/25 blur-[100px]"
          animate={{ opacity: [0.22, 0.4, 0.22], scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        />
        <div
          className="absolute left-1/2 top-[42%] h-[min(720px,130vw)] w-[min(720px,130vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,92,255,0.08)_0%,transparent_68%)] blur-[100px]"
          aria-hidden
        />
        <div
          className="absolute bottom-0 right-[18%] h-[min(380px,70vw)] w-[min(380px,70vw)] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.06)_0%,transparent_70%)] blur-[90px]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nest-bg/25 to-nest-bg/85" />
        <div
          className="bg-noise absolute inset-0 opacity-[0.035] mix-blend-overlay"
          style={{ backgroundSize: '128px 128px' }}
        />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_minmax(0,420px)] lg:gap-14 xl:grid-cols-[1fr_minmax(0,460px)]">
          <div className="flex flex-col text-center lg:text-left">
            <motion.p
              className="mb-5 inline-flex items-center justify-center self-center rounded-full border border-nest-border/80 bg-nest-surface/50 px-3 py-1 text-small text-nest-muted backdrop-blur-sm lg:self-start"
              {...fadeUp}
              transition={{ duration: 0.5, ease: easeOut }}
            >
              Built for teams who ship
            </motion.p>

            <motion.h1
              className="mx-auto max-w-xl text-[clamp(2.25rem,5.5vw,3.75rem)] font-extrabold leading-[1.06] tracking-tight text-nest-text lg:mx-0 lg:max-w-[22ch]"
              {...fadeUp}
              transition={{ duration: 0.65, ease: easeOut, delay: 0.06 }}
            >
              Your workspace, unified in{' '}
              <span className="bg-gradient-to-r from-nest-primary via-[#9B7FFF] to-nest-accent bg-clip-text text-transparent">
                WorkNest
              </span>
            </motion.h1>

            <motion.p
              className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-nest-muted sm:mt-10 sm:text-lg sm:leading-relaxed lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: easeOut, delay: 0.22 }}
            >
              Plan projects, align stakeholders, and move work forward with a calm, focused interface designed for
              modern SaaS teams.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row lg:justify-start"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeOut, delay: 0.38 }}
            >
              <Button className="w-full min-w-[11rem] sm:w-auto">Start free trial</Button>
              <Button variant="ghost" id="sign-in" className="w-full min-w-[11rem] sm:w-auto">
                View demo
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="min-w-0 lg:justify-self-end lg:w-full"
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: easeOut, delay: 0.45 }}
          >
            <HeroKanbanPreview />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
