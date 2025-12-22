import React from 'react'

interface CardProps {
    children: React.ReactNode
    className?: string
    hover?: boolean
    variant?: 'white' | 'paper'
}

const Card = ({ children, className = '', hover = true, variant = 'white' }: CardProps) => {
    const bgClass = variant === 'white' ? 'bg-white' : 'bg-background-paper'

    return (
        <div
            className={`
        relative overflow-hidden rounded-2xl border border-border 
        shadow-card
        ${bgClass}
        ${hover ? 'transition-all duration-300 hover:shadow-float hover:-translate-y-1 hover:border-primary/30' : ''}
        ${className}
      `}
        >
            <div className="relative p-6 sm:p-8">
                {children}
            </div>
        </div>
    )
}

export default Card
