import { Footer } from './Footer.jsx'
import { Header } from './Header.jsx'

export function AppLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-nest-bg text-nest-text">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
