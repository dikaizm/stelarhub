import React, { ReactNode } from 'react'

export default function SectionItem({ children, className, isContainer = true }: { children: ReactNode, className?: string, isContainer?: boolean }) {
  return (
    <section className={`relative w-full ${isContainer ? 'container' : ''} ${className || ''}`}>
      {children}
    </section>
  )
}