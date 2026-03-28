import { Fragment, createElement } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, FolderPlus, ListTodo, TrendingUp } from 'lucide-react'
import { Container } from '../ui/Container.jsx'

const ease = [0.22, 1, 0.36, 1]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.16, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease } },
}

const steps = [
  {
    Icon: FolderPlus,
    title: 'Create Projects',
    description: 'Set up workspaces and structure work the way your team already thinks.',
  },
  {
    Icon: ListTodo,
    title: 'Assign Tasks',
    description: 'Hand off ownership, deadlines, and priorities in one calm place.',
  },
  {
    Icon: TrendingUp,
    title: 'Track Progress',
    description: 'Watch work move forward with live status across boards and views.',
  },
]

function ConnectorBetween() {
  return (
    <>
      <div className="flex justify-center py-1 md:hidden" aria-hidden>
        <div className="h-14 w-[2px] rounded-full bg-gradient-to-b from-nest-border/70 via-nest-primary/55 to-nest-accent/40 shadow-[0_0_14px_rgba(124,92,255,0.35),0_0_10px_rgba(34,211,238,0.12)]" />
      </div>
      <div className="hidden md:flex flex-none items-center justify-center px-1 py-8 lg:px-2" aria-hidden>
        <div className="flex items-center gap-1.5">
          <div className="h-[2px] w-6 rounded-full bg-gradient-to-r from-nest-border/50 via-nest-primary/55 to-nest-accent/35 shadow-[0_0_10px_rgba(124,92,255,0.25)] lg:w-10" />
          <span className="flex shrink-0 text-nest-primary drop-shadow-[0_0_10px_rgba(124,92,255,0.55)]">
            {createElement(ArrowRight, { className: 'h-4 w-4 lg:h-[1.125rem] lg:w-[1.125rem]', strokeWidth: 2, 'aria-hidden': true })}
          </span>
          <div className="h-[2px] w-6 rounded-full bg-gradient-to-r from-nest-accent/30 via-nest-primary/45 to-nest-border/55 shadow-[0_0_8px_rgba(34,211,238,0.15)] lg:w-10" />
        </div>
      </div>
    </>
  )
}

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-20 overflow-hidden border-t border-nest-border/40 bg-[#070A12] py-20 sm:py-24 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_-10%,rgba(124,92,255,0.055),transparent_60%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-nest-primary/[0.03] via-transparent to-nest-accent/[0.025]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-nest-border/50 to-transparent"
        aria-hidden
      />

      <Container className="relative">
        <motion.div
          className="mx-auto mb-14 max-w-xl text-center md:mb-16"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, ease }}
        >
          <h2 className="text-[clamp(1.5rem,3.5vw,1.875rem)] font-bold leading-tight tracking-tight text-nest-text">
            How WorkNest works
          </h2>
          <p className="mt-4 text-base leading-relaxed text-nest-muted sm:text-[1.0625rem]">
            Three simple steps from empty workspace to shipped work.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto flex max-w-4xl flex-col md:flex-row md:items-center md:justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-48px' }}
        >
          {steps.map((step, index) => (
            <Fragment key={step.title}>
              <motion.div variants={itemVariants} className="min-w-0 flex-1">
                <div
                  className={`group h-full rounded-2xl border px-6 py-8 text-center shadow-[0_22px_52px_-42px_rgba(0,0,0,0.58),inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-sm transition-[transform,border-color,background-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-nest-primary/35 hover:bg-nest-surface/40 hover:shadow-[0_32px_64px_-36px_rgba(0,0,0,0.65),0_0_48px_-24px_rgba(124,92,255,0.14),inset_0_1px_0_0_rgba(255,255,255,0.06)] motion-reduce:hover:translate-y-0 md:py-9 ${
                    index === 0
                      ? 'border-nest-primary/35 bg-nest-surface/36 shadow-[0_22px_52px_-42px_rgba(0,0,0,0.58),0_0_56px_-28px_rgba(124,92,255,0.14),inset_0_1px_0_0_rgba(255,255,255,0.06)]'
                      : 'border-nest-border/45 bg-nest-surface/25'
                  }`}
                >
                  <div
                    className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-nest-primary/30 bg-gradient-to-br from-nest-primary/22 to-nest-accent/14 text-nest-primary shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_0_32px_-8px_rgba(124,92,255,0.4)] transition-[transform,box-shadow,border-color] duration-300 ease-out group-hover:border-nest-primary/45 group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_0_40px_-6px_rgba(124,92,255,0.5)] group-hover:scale-[1.04] motion-reduce:group-hover:scale-100"
                    aria-hidden
                  >
                    {createElement(step.Icon, { className: 'h-6 w-6', strokeWidth: 1.75, 'aria-hidden': true })}
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-nest-text">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-nest-muted sm:text-[0.9375rem]">{step.description}</p>
                </div>
              </motion.div>
              {index < steps.length - 1 ? <ConnectorBetween /> : null}
            </Fragment>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
