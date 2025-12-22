import React from 'react'

interface SectionProps {
    children: React.ReactNode
    className?: string
    id?: string
    background?: 'white' | 'paper' | 'transparent'
}

const Section = ({ children, className = '', id, background = 'transparent' }: SectionProps) => {
    const bgClasses = {
        white: 'bg-background',
        paper: 'bg-background-paper',
        transparent: 'bg-transparent'
    }

    return (
        <section
            id={id}
            className={`
        w-full py-16 sm:py-24 lg:py-32 relative
        ${bgClasses[background]}
        ${className}
      `}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    )
}

export default Section
