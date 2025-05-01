"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface SectionObserverProps {
  children: React.ReactNode
  id?: string
  className?: string
  animateFrom?: "left" | "right" | "bottom" | "top"
  delay?: number
  threshold?: number
  rootMargin?: string
}

export function SectionObserver({
  children,
  id,
  className,
  animateFrom = "bottom",
  delay = 0,
  threshold = 0.1,
  rootMargin = "-100px 0px",
}: SectionObserverProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    // Initial state - hidden
    section.style.opacity = "0"
    section.style.transform = getInitialTransform(animateFrom)
    section.style.transition = `opacity 0.6s ease-out, transform 0.8s ease-out`
    if (delay > 0) {
      section.style.transitionDelay = `${delay}ms`
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate in
            section.style.opacity = "1"
            section.style.transform = "translate3d(0, 0, 0)"
            observer.unobserve(section)
          }
        })
      },
      {
        threshold,
        rootMargin,
      },
    )

    observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [animateFrom, delay, threshold, rootMargin])

  return (
    <div ref={sectionRef} id={id} className={cn(className)}>
      {children}
    </div>
  )
}

function getInitialTransform(direction: "left" | "right" | "bottom" | "top"): string {
  switch (direction) {
    case "left":
      return "translate3d(-40px, 0, 0)"
    case "right":
      return "translate3d(40px, 0, 0)"
    case "bottom":
      return "translate3d(0, 40px, 0)"
    case "top":
      return "translate3d(0, -40px, 0)"
    default:
      return "translate3d(0, 40px, 0)"
  }
}
