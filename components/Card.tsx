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
        relative overflow-hidden bg-slate-50 rounded-2xl
        ${bgClass}
        ${hover ? 'transition-all duration-300 hover:bg-slate-100' : ''}
        ${className}
      `}
        >
            <div className="relative p-4">
                {children}
            </div>
        </div>
    )
}

export default Card
