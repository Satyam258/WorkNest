import { createElement } from 'react'
import { motion } from 'framer-motion'
import { LayoutDashboard, Layers, Zap } from 'lucide-react'
import { Container } from '../ui/Container.jsx'

const ease = [0.22, 1, 0.36, 1]

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.11, delayChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
}

const features = [
  {
    title: 'Clarity first',
    description: 'Structured views and calm hierarchy so teams always know what matters next.',
    Icon: LayoutDashboard,
  },
  {
    title: 'Fast by default',
    description: 'A responsive shell that stays snappy as your org, boards, and data grow.',
    Icon: Zap,
  },
  {
    title: 'Designed to scale',
    description: 'Tokens, primitives, and patterns that plug into your product and brand.',
    Icon: Layers,
  },
]

export function Features() {
  return (
    <section
      id="product"
      className="relative scroll-mt-20 overflow-hidden border-t border-nest-border/25 bg-[#090D15] py-20 sm:py-24 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_0%,rgba(124,92,255,0.055),transparent_58%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-nest-primary/[0.04] via-transparent to-nest-accent/[0.03]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-nest-border/40 to-transparent"
        aria-hidden
      />

      <Container className="relative">
        <div className="mx-auto mb-14 max-w-xl text-center md:mb-16">
          <h2 className="text-[clamp(1.625rem,4vw,2.125rem)] font-extrabold leading-tight tracking-tight text-nest-text">
            Everything in one nest
          </h2>
          <p className="mt-5 text-base leading-relaxed text-nest-muted sm:text-lg sm:leading-relaxed">
            Opinionated defaults, flexible workflows, and the polish your customers expect.
          </p>
        </div>

        <motion.ul
          className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-48px 0px' }}
        >
          {features.map(({ title, description, Icon }) => (
            <motion.li key={title} variants={cardVariants} className="group h-full">
              <div className="h-full rounded-2xl bg-gradient-to-br from-white/[0.09] via-nest-border/40 to-nest-primary/[0.14] p-px shadow-[0_22px_56px_-38px_rgba(0,0,0,0.7)] transition-[transform,box-shadow] duration-200 ease-out will-change-transform group-hover:-translate-y-[7px] group-hover:shadow-[0_32px_72px_-34px_rgba(0,0,0,0.78),0_0_72px_-32px_rgba(124,92,255,0.18)]">
                <div className="flex h-full flex-col rounded-[0.9375rem] border border-white/[0.06] bg-nest-bg/82 px-6 py-7 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),inset_0_0_56px_-32px_rgba(124,92,255,0.07)] backdrop-blur-sm transition-[border-color,box-shadow,background-color] duration-200 ease-out group-hover:border-nest-primary/25 group-hover:bg-nest-bg/90 group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07),inset_0_0_64px_-28px_rgba(124,92,255,0.12),0_0_0_1px_rgba(124,92,255,0.07)] sm:px-7 sm:py-8">
                  <div
                    className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-nest-primary/20 bg-gradient-to-br from-nest-primary/25 to-nest-accent/15 text-[#C4B5FD] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_0_28px_-6px_rgba(124,92,255,0.4)] transition-[color,box-shadow,border-color,filter] duration-200 ease-out group-hover:border-nest-accent/30 group-hover:text-nest-accent group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16),0_0_36px_-4px_rgba(124,92,255,0.5)]"
                    aria-hidden
                  >
                    {createElement(Icon, { className: 'h-5 w-5', strokeWidth: 1.5, 'aria-hidden': true })}
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-nest-text">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-nest-muted sm:text-[0.9375rem]">{description}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  )
}
