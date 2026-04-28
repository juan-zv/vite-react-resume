import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type NavItem = {
  id: string
  label: string
  href: string
}

type StickyNavProps = {
  /** Desktop nav content (NavigationMenu) — hidden on mobile */
  children: React.ReactNode
  /** Items rendered in the mobile full-screen overlay */
  navItems: NavItem[]
  className?: string
}

/**
 * Responsive sticky navigation:
 * - Desktop (md+): renders children inline with sticky background on scroll
 * - Mobile: hamburger icon on the left, full-screen animated overlay when open
 */
export function StickyNav({ children, navItems, className }: StickyNavProps) {
  const sentinelRef = useRef<HTMLDivElement>(null)
  const [isStuck, setIsStuck] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  // Intersection Observer for sticky background
  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsStuck(!entry.isIntersecting),
      { threshold: 0 }
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  const closeMobile = useCallback(() => setIsMobileOpen(false), [])

  return (
    <>
      {/* ── Mobile: fixed bar always at top ── */}
      <div
        className="fixed top-0 left-0 right-0 z-40 flex items-center px-4 py-2 md:hidden bg-background/80 backdrop-blur-lg shadow-md border-b border-border/40"
      >
        <Button
          variant="ghost"
          size="icon"
          aria-label="Open menu"
          onClick={() => setIsMobileOpen(true)}
        >
          <IconMenu2 className="size-6" stroke={1.5} />
        </Button>
      </div>

      {/* ── Desktop: sticky nav that gains background on scroll ── */}
      <div ref={sentinelRef} aria-hidden="true" className="h-0 w-full hidden md:block" />
      <nav
        className={cn(
          'sticky top-0 z-40 w-full py-2 transition-all duration-300 ease-out hidden md:block',
          isStuck
            ? 'bg-background/80 backdrop-blur-lg shadow-md'
            : 'bg-transparent shadow-none border-b border-transparent',
          className
        )}
      >
        {children}
      </nav>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-xl"
          >
            {/* Close button — top-left to match hamburger position */}
            <div className="flex items-center justify-start px-4 py-4">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close menu"
                onClick={closeMobile}
              >
                <IconX className="size-6" stroke={1.5} />
              </Button>
            </div>

            {/* Animated links */}
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08, delayChildren: 0.1 },
                },
              }}
              className="flex flex-1 flex-col items-center justify-center gap-6"
            >
              {navItems.map((item) => (
                <motion.li
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.9 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: { type: 'spring', stiffness: 300, damping: 24 },
                    },
                  }}
                  className="list-none"
                >
                  <a
                    href={item.href}
                    onClick={closeMobile}
                    className="text-3xl font-semibold tracking-tight text-foreground/90 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
