import { createElement } from 'react'
import { motion } from 'framer-motion'
import { Bell, Check, Search } from 'lucide-react'
import { Container } from '../ui/Container.jsx'

const ease = [0.22, 1, 0.36, 1]

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease, staggerChildren: 0.12, delayChildren: 0.06 },
  },
}

const leftVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
}

const dashboardVariants = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease, delay: 0.08 } },
}

const kanbanColumns = [
  {
    title: 'To Do',
    tasks: [
      {
        title: 'Design system audit',
        tag: 'Design',
        tagClass: 'bg-nest-primary/28 text-[#DDD6FE] ring-nest-primary/40 shadow-[0_0_12px_-4px_rgba(124,92,255,0.35)]',
        initials: 'AK',
        avatarClass: 'from-violet-400 to-nest-primary',
      },
      {
        title: 'Webhook retries',
        tag: 'Dev',
        tagClass: 'bg-nest-accent/22 text-[#A5F3FC] ring-nest-accent/38 shadow-[0_0_12px_-4px_rgba(34,211,238,0.25)]',
        initials: 'MR',
        avatarClass: 'from-cyan-400 to-nest-accent',
      },
    ],
  },
  {
    title: 'In Progress',
    tasks: [
      {
        title: 'Q2 roadmap draft',
        tag: 'Ops',
        tagClass: 'bg-amber-500/25 text-amber-100 ring-amber-400/35 shadow-[0_0_12px_-4px_rgba(245,158,11,0.2)]',
        initials: 'JL',
        avatarClass: 'from-amber-300 to-amber-600',
      },
      {
        title: 'OAuth edge cases',
        tag: 'Dev',
        tagClass: 'bg-nest-accent/22 text-[#A5F3FC] ring-nest-accent/38 shadow-[0_0_12px_-4px_rgba(34,211,238,0.25)]',
        initials: 'MR',
        avatarClass: 'from-cyan-400 to-nest-accent',
      },
    ],
  },
  {
    title: 'Done',
    tasks: [
      {
        title: 'Billing copy review',
        tag: 'Design',
        tagClass: 'bg-nest-primary/28 text-[#DDD6FE] ring-nest-primary/40 shadow-[0_0_12px_-4px_rgba(124,92,255,0.35)]',
        initials: 'AK',
        avatarClass: 'from-violet-400 to-nest-primary',
      },
    ],
  },
]

const analyticsBars = [
  { label: 'Active', value: 72, tone: 'bg-nest-primary' },
  { label: 'Completed', value: 54, tone: 'bg-nest-accent' },
  { label: 'Blocked', value: 18, tone: 'bg-amber-500/80' },
]

const bullets = ['Real-time updates', 'Smart task organization', 'Team collaboration']

function DashboardChrome({ children }) {
  return (
    <div className="relative [perspective:1500px]">
      <div
        className="pointer-events-none absolute -inset-16 rounded-[2.5rem] bg-[radial-gradient(ellipse_75%_60%_at_45%_45%,rgba(124,92,255,0.22),transparent_72%)] blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -inset-12 rounded-[2.25rem] bg-[radial-gradient(ellipse_70%_55%_at_85%_25%,rgba(34,211,238,0.14),transparent_65%)] blur-[88px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -inset-6 left-[20%] top-[60%] rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.1)_0%,transparent_70%)] blur-[72px]"
        aria-hidden
      />
      <motion.div
        className="relative origin-[50%_92%]"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div
          className="relative overflow-hidden rounded-2xl border border-nest-border/65 bg-nest-surface/96 shadow-[0_50px_120px_-48px_rgba(0,0,0,0.92),0_28px_64px_-32px_rgba(0,0,0,0.55),0_0_0_1px_rgba(124,92,255,0.1),0_0_80px_-40px_rgba(124,92,255,0.12),inset_0_1px_0_0_rgba(255,255,255,0.08)]"
          style={{
            transform: 'rotateX(4deg) rotateY(-1.25deg) scale(0.986)',
            transformStyle: 'preserve-3d',
          }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  )
}

export function DashboardPreview() {
  return (
    <section
      id="dashboard-preview"
      className="relative scroll-mt-20 overflow-hidden border-t border-nest-border/30 bg-[#070A11] py-20 sm:py-24 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_100%_25%,rgba(124,92,255,0.065),transparent_58%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_45%_at_0%_70%,rgba(34,211,238,0.04),transparent_60%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-nest-primary/[0.025] via-transparent to-nest-accent/[0.03]"
        aria-hidden
      />

      <Container className="relative">
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-14 xl:gap-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px 0px' }}
        >
          <motion.div variants={leftVariants} className="text-center lg:text-left">
            <p className="mb-4 inline-flex items-center rounded-full border border-nest-border/70 bg-nest-surface/50 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-nest-muted">
              Product Preview
            </p>
            <h2 className="text-[clamp(1.5rem,3.5vw,2rem)] font-bold leading-tight tracking-tight text-nest-text">
              Manage everything in one place
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-nest-muted sm:text-[1.0625rem] lg:mx-0">
              Visualize tasks, track progress, and collaborate with your team effortlessly.
            </p>
            <ul className="mx-auto mt-8 max-w-md space-y-3 text-left text-small text-nest-muted lg:mx-0">
              {bullets.map((item) => (
                <li
                  key={item}
                  className="group flex items-start gap-3 rounded-lg py-0.5 transition-colors duration-200 ease-out hover:bg-white/[0.02]"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-nest-primary/35 bg-gradient-to-br from-nest-primary/25 to-nest-accent/15 text-nest-primary shadow-[0_0_20px_-6px_rgba(124,92,255,0.45),inset_0_1px_0_0_rgba(255,255,255,0.12)] transition-[transform,box-shadow,border-color] duration-200 ease-out group-hover:border-nest-primary/50 group-hover:shadow-[0_0_28px_-4px_rgba(124,92,255,0.55),inset_0_1px_0_0_rgba(255,255,255,0.16)] group-hover:scale-105 motion-reduce:group-hover:scale-100">
                    {createElement(Check, { className: 'h-3.5 w-3.5', strokeWidth: 2.5, 'aria-hidden': true })}
                  </span>
                  <span className="leading-snug text-nest-text/90 transition-colors duration-200 ease-out group-hover:text-nest-text">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={dashboardVariants} className="min-w-0">
            <DashboardChrome>
              {/* Top bar */}
              <div className="flex items-center justify-between gap-3 border-b border-nest-border/55 bg-nest-bg/55 px-4 py-3 shadow-[0_12px_32px_-28px_rgba(0,0,0,0.65)] sm:px-5">
                <div className="min-w-0">
                  <p className="truncate text-[0.65rem] font-medium uppercase tracking-wider text-nest-muted">Workspace</p>
                  <p className="truncate text-sm font-semibold text-nest-text">Product · Sprint 24</p>
                </div>
                <div className="flex shrink-0 items-center gap-1 sm:gap-2">
                  <button
                    type="button"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-nest-border/60 bg-nest-surface/50 text-nest-muted transition-[color,background-color,border-color,transform,box-shadow] duration-200 ease-out hover:border-nest-border/80 hover:bg-nest-surface hover:text-nest-text hover:shadow-[0_0_20px_-8px_rgba(124,92,255,0.2)] hover:scale-[1.03] active:scale-[0.97]"
                    aria-label="Search"
                  >
                    {createElement(Search, { className: 'h-4 w-4', strokeWidth: 1.75, 'aria-hidden': true })}
                  </button>
                  <button
                    type="button"
                    className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-nest-border/60 bg-nest-surface/50 text-nest-muted transition-[color,background-color,border-color,transform,box-shadow] duration-200 ease-out hover:border-nest-border/80 hover:bg-nest-surface hover:text-nest-text hover:shadow-[0_0_20px_-8px_rgba(34,211,238,0.18)] hover:scale-[1.03] active:scale-[0.97]"
                    aria-label="Notifications"
                  >
                    {createElement(Bell, { className: 'h-4 w-4', strokeWidth: 1.75, 'aria-hidden': true })}
                    <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-nest-accent shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-4 p-4 sm:flex-row sm:gap-5 sm:p-5">
                {/* Kanban */}
                <div className="min-w-0 flex-1">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-xs font-semibold text-nest-text">Board</h3>
                    <span className="rounded-md border border-nest-border/50 bg-nest-bg/60 px-2 py-0.5 text-[0.65rem] text-nest-muted">
                      5 tasks
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {kanbanColumns.map((col) => (
                      <div key={col.title} className="flex min-w-0 flex-col gap-2">
                        <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-nest-muted">{col.title}</p>
                        <div className="flex flex-col gap-2">
                          {col.tasks.map((task) => (
                            <div
                              key={task.title}
                              className="group cursor-default rounded-xl border border-nest-border/55 bg-nest-bg/85 p-2.5 shadow-[0_10px_28px_-16px_rgba(0,0,0,0.62),0_4px_12px_-8px_rgba(0,0,0,0.35),inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-nest-border/90 hover:shadow-[0_20px_40px_-22px_rgba(0,0,0,0.72),0_0_32px_-18px_rgba(124,92,255,0.08),inset_0_1px_0_0_rgba(255,255,255,0.07)] sm:p-3"
                            >
                              <p className="text-[0.7rem] font-medium leading-snug text-nest-text sm:text-xs">{task.title}</p>
                              <div className="mt-2 flex items-center justify-between gap-2">
                                <span
                                  className={`inline-flex rounded-md px-1.5 py-0.5 text-[0.6rem] font-medium ring-1 ring-inset sm:text-[0.65rem] ${task.tagClass}`}
                                >
                                  {task.tag}
                                </span>
                                <span
                                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-[0.55rem] font-bold text-white shadow-sm ring-1 ring-white/10 sm:h-7 sm:w-7 sm:text-[0.6rem] ${task.avatarClass}`}
                                  aria-hidden
                                >
                                  {task.initials}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Analytics */}
                <div className="w-full shrink-0 sm:w-[9.5rem] lg:w-[10.5rem]">
                  <div className="rounded-xl bg-gradient-to-br from-nest-primary/20 via-nest-border/40 to-nest-accent/15 p-px shadow-[0_0_40px_-16px_rgba(124,92,255,0.2)]">
                    <div className="rounded-[0.6875rem] border border-white/[0.06] bg-nest-bg/82 p-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),inset_0_0_32px_-20px_rgba(124,92,255,0.08)] sm:p-3.5">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-nest-muted">This week</p>
                      <p className="mt-1 text-lg font-bold tabular-nums text-nest-text">84%</p>
                      <p className="text-[0.65rem] text-nest-muted">On track</p>
                      <div className="mt-4 space-y-3.5 border-t border-nest-border/45 pt-3.5">
                        {analyticsBars.map((bar) => (
                          <div key={bar.label}>
                            <div className="mb-1.5 flex items-center justify-between text-[0.6rem] text-nest-muted sm:text-[0.65rem]">
                              <span className="text-nest-text/75">{bar.label}</span>
                              <span className="tabular-nums font-medium text-nest-text">{bar.value}%</span>
                            </div>
                            <div className="h-2 overflow-hidden rounded-full bg-nest-surface/90 ring-1 ring-nest-border/40">
                              <div
                                className={`h-full rounded-full ${bar.tone} shadow-[0_0_12px_-2px_rgba(255,255,255,0.15)]`}
                                style={{ width: `${bar.value}%`, opacity: 0.95 }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DashboardChrome>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
