"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    // Add smooth scrolling behavior to the document
    document.documentElement.style.scrollBehavior = "smooth"

    const handleScroll = () => {
      const sections = navItems.map((item) => {
        const section = document.querySelector(item.href)
        if (!section) return { id: item.href, top: 0, bottom: 0 }

        const rect = section.getBoundingClientRect()
        return {
          id: item.href,
          top: rect.top,
          bottom: rect.bottom,
        }
      })

      // Find the section that is currently in view
      const currentSection = sections.find((section) => {
        // Adjust these values to control when a section is considered "active"
        return section.top <= 100 && section.bottom > 100
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      } else if (window.scrollY < 100) {
        // If at the top of the page, no section is active
        setActiveSection("")
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav className="hidden md:flex gap-6">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors duration-200 relative",
            activeSection === item.href ? "text-primary" : "text-muted-foreground hover:text-primary",
          )}
          onClick={(e) => {
            e.preventDefault()
            const element = document.querySelector(item.href)
            if (element) {
              element.scrollIntoView({ behavior: "smooth" })
              // Update URL without page reload
              window.history.pushState(null, "", item.href)
            }
          }}
        >
          {item.label}
          {activeSection === item.href && (
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
          )}
        </Link>
      ))}
    </nav>
  )
}

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="sm" className="px-0 text-muted-foreground" onClick={() => setIsOpen(!isOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn("transition-transform", isOpen ? "rotate-90" : "")}
        >
          {isOpen ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 12h16M4 6h16M4 18h16" />}
        </svg>
        <span className="sr-only">Alternar menu</span>
      </Button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 z-50 bg-background border-b border-border p-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium py-2 text-muted-foreground hover:text-primary"
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector(item.href)
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                  setIsOpen(false)
                }
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
