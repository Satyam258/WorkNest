import { motion } from 'framer-motion'

const hoverEase = [0.22, 1, 0.36, 1]

const columns = [
  {
    title: 'To Do',
    tasks: [
      { title: 'Review wireframes', tag: 'Design', tagClass: 'bg-nest-primary/20 text-nest-primary ring-nest-primary/25' },
      { title: 'API contract draft', tag: 'Dev', tagClass: 'bg-nest-accent/15 text-nest-accent ring-nest-accent/25' },
    ],
  },
  {
    title: 'In Progress',
    tasks: [
      { title: 'Sprint planning deck', tag: 'Ops', tagClass: 'bg-amber-500/15 text-amber-200/90 ring-amber-500/20' },
      { title: 'Auth flow QA', tag: 'Dev', tagClass: 'bg-nest-accent/15 text-nest-accent ring-nest-accent/25' },
    ],
  },
  {
    title: 'Done',
    tasks: [
      { title: 'Onboarding copy', tag: 'Design', tagClass: 'bg-nest-primary/20 text-nest-primary ring-nest-primary/25' },
    ],
  },
]

export function HeroKanbanPreview() {
  return (
    <div className="relative w-full max-w-md mx-auto [perspective:1400px] lg:max-w-none">
      <motion.div
        className="relative w-full origin-center"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.div
          className="group relative rounded-2xl will-change-transform"
          style={{ transformStyle: 'preserve-3d', transformOrigin: '50% 80%' }}
          initial={{ rotateX: 5.5, scale: 0.985, y: 0 }}
          whileHover={{
            rotateX: 2,
            scale: 1,
            y: -8,
            transition: { duration: 0.22, ease: hoverEase },
          }}
        >
          <div
            className="absolute -inset-px rounded-2xl bg-gradient-to-br from-nest-primary/25 via-transparent to-nest-accent/20 opacity-80 blur-sm transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden
          />
          <div
            className="relative rounded-2xl border border-nest-border/80 bg-nest-surface/95 p-4 shadow-[0_32px_64px_-28px_rgba(0,0,0,0.75),0_0_0_1px_rgba(124,92,255,0.08),0_48px_96px_-40px_rgba(124,92,255,0.12),inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-md transition-shadow duration-300 ease-out group-hover:shadow-[0_40px_80px_-32px_rgba(0,0,0,0.8),0_0_0_1px_rgba(124,92,255,0.14),0_56px_110px_-48px_rgba(34,211,238,0.12),inset_0_1px_0_0_rgba(255,255,255,0.08)] sm:p-5"
            role="img"
            aria-label="Preview of a kanban board with columns To Do, In Progress, and Done"
          >
            <div className="mb-3 flex items-center justify-between gap-2 border-b border-nest-border/60 pb-3">
              <span className="text-xs font-medium text-nest-muted">Workspace</span>
              <span className="h-1.5 w-1.5 rounded-full bg-nest-accent/80 shadow-[0_0_10px_rgba(34,211,238,0.55)]" />
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {columns.map((col) => (
                <div key={col.title} className="flex min-w-0 flex-col gap-2">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-nest-muted">{col.title}</p>
                  <div className="flex flex-col gap-2">
                    {col.tasks.map((task) => (
                      <div
                        key={task.title}
                        className="rounded-lg border border-nest-border/70 bg-nest-bg/95 p-2.5 shadow-[0_4px_14px_-6px_rgba(0,0,0,0.45),inset_0_1px_0_0_rgba(255,255,255,0.04)] transition-shadow duration-200 ease-out hover:shadow-md sm:p-3"
                      >
                        <p className="text-xs font-medium leading-snug text-nest-text sm:text-[0.8125rem]">{task.title}</p>
                        <span
                          className={`mt-2 inline-flex rounded-md px-1.5 py-0.5 text-[0.65rem] font-medium ring-1 ring-inset ${task.tagClass}`}
                        >
                          {task.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
