import { motion } from 'framer-motion'
import { Container } from '../ui/Container.jsx'

const ease = [0.22, 1, 0.36, 1]

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
}

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Product Manager',
    company: 'Northwind Labs',
    quote: 'We cut weekly planning time in half. Everyone finally sees the same priorities without another status meeting.',
    initials: 'SC',
    avatarClass: 'from-violet-400 to-nest-primary',
  },
  {
    name: 'Marcus Webb',
    role: 'Founder',
    company: 'Relay Studio',
    quote: 'Onboarding new hires used to take days. With WorkNest, they’re contributing on day one—it just feels obvious.',
    initials: 'MW',
    avatarClass: 'from-cyan-400 to-nest-accent',
  },
  {
    name: 'Elena Rivas',
    role: 'Engineering Lead',
    company: 'Craftwave',
    quote: 'Handoffs are cleaner and fewer things slip through. It’s the first tool our designers and devs both like using.',
    initials: 'ER',
    avatarClass: 'from-amber-300 to-amber-600',
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative scroll-mt-20 overflow-hidden border-t border-nest-border/30 bg-nest-bg py-20 sm:py-24 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_20%,rgba(124,92,255,0.04),transparent_60%)]"
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
            Loved by teams worldwide
          </h2>
          <p className="mt-4 text-base leading-relaxed text-nest-muted sm:text-[1.0625rem]">
            Real feedback from people shipping work every day.
          </p>
        </motion.div>

        <motion.ul
          className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-48px' }}
        >
          {testimonials.map((t) => (
            <motion.li key={t.name} variants={cardVariants} className="min-w-0">
              <figure className="group h-full rounded-2xl border border-nest-border/45 bg-nest-surface/20 px-6 py-7 shadow-[0_20px_48px_-40px_rgba(0,0,0,0.55),inset_0_1px_0_0_rgba(255,255,255,0.04)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-nest-border/60 hover:shadow-[0_28px_56px_-36px_rgba(0,0,0,0.62),0_0_40px_-28px_rgba(124,92,255,0.06)] motion-reduce:hover:translate-y-0">
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-xs font-bold text-white shadow-md ring-1 ring-white/10 ${t.avatarClass}`}
                    aria-hidden
                  >
                    {t.initials}
                  </div>
                  <div className="min-w-0 text-left">
                    <figcaption className="font-semibold text-nest-text">{t.name}</figcaption>
                    <p className="mt-0.5 text-small text-nest-muted">
                      {t.role}
                      {t.company ? (
                        <>
                          {' · '}
                          <span className="text-nest-muted">{t.company}</span>
                        </>
                      ) : null}
                    </p>
                  </div>
                </div>
                <blockquote className="mt-5 text-sm leading-relaxed text-nest-text/90 sm:text-[0.9375rem]">
                  <p>&ldquo;{t.quote}&rdquo;</p>
                </blockquote>
              </figure>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  )
}
