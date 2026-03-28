/**
 * Centers content with a max width of 1200px and responsive horizontal padding.
 */
export function Container({ className = '', children, ...props }) {
  return (
    <div className={`mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8 ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}
