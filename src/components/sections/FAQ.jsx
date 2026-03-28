import { createElement, useId, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Container } from '../ui/Container.jsx'

const ease = [0.22, 1, 0.36, 1]

const faqs = [
  {
    q: 'Is WorkNest free to use?',
    a: 'Yes. You can start on the Free plan with core boards and tasks. Upgrade when you need more seats, history, or automation.',
  },
  {
    q: 'Can I collaborate with my team?',
    a: 'Yes. Share workspaces, assign owners, and keep comments and updates in one place so everyone stays aligned.',
  },
  {
    q: 'Does WorkNest support integrations?',
    a: 'We’re rolling out webhooks and connectors to popular tools. Pro and Team customers get new integrations first.',
  },
  {
    q: 'Is my data secure?',
    a: 'Traffic is encrypted in transit. We use strict access controls, regular backups, and isolated data per workspace.',
  },
  {
    q: 'Can I upgrade anytime?',
    a: 'You can move to Pro or Team whenever you’re ready. Your workspace updates to the new limits on your next billing cycle.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const baseId = useId()

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section
      id="faq"
      className="relative scroll-mt-20 overflow-hidden border-t border-nest-border/30 bg-[#080B12] py-20 sm:py-24 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_45%_at_50%_0%,rgba(124,92,255,0.035),transparent_58%)]"
        aria-hidden
      />

      <Container className="relative">
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center md:mb-14"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, ease }}
        >
          <h2 className="text-[clamp(1.5rem,3.5vw,1.875rem)] font-bold leading-tight tracking-tight text-nest-text">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-nest-muted sm:text-[1.0625rem]">
            Quick answers about plans, collaboration, and security.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto max-w-2xl lg:max-w-3xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease, delay: 0.06 }}
        >
          <div className="divide-y divide-nest-border/40 rounded-2xl border border-nest-border/45 bg-nest-surface/15 px-1 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-sm sm:px-0">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index
              const panelId = `${baseId}-panel-${index}`
              const triggerId = `${baseId}-trigger-${index}`

              return (
                <div key={item.q} className="px-4 sm:px-5">
                  <h3 className="text-base font-medium leading-snug text-nest-text">
                    <button
                      type="button"
                      id={triggerId}
                      className="flex w-full items-center justify-between gap-4 py-4 text-left transition-colors duration-200 ease-out hover:text-nest-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nest-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080B12]"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(index)}
                    >
                      <span className="pr-2">{item.q}</span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-nest-border/50 bg-nest-bg/40 text-nest-muted transition-[transform,background-color,border-color,color] duration-300 ease-out ${
                          isOpen ? 'rotate-180 border-nest-primary/25 bg-nest-primary/10 text-nest-primary' : ''
                        }`}
                        aria-hidden
                      >
                        {createElement(ChevronDown, { className: 'h-4 w-4', strokeWidth: 2, 'aria-hidden': true })}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="min-h-0" aria-hidden={!isOpen}>
                      <motion.p
                        className="pb-4 pr-10 text-sm leading-relaxed text-nest-muted sm:text-[0.9375rem]"
                        initial={false}
                        animate={{ opacity: isOpen ? 1 : 0 }}
                        transition={{ duration: 0.2, ease }}
                      >
                        {item.a}
                      </motion.p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
