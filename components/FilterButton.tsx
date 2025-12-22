import React from 'react'

interface FilterButtonProps {
    label: string
    active?: boolean
}

export default function FilterButton({ label, active = false }: FilterButtonProps) {
    return (
        <button
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors border ${active
                ? 'bg-primary text-white border-primary'
                : 'bg-white text-text-secondary border-border hover:border-primary hover:text-primary'
                }`}
        >
            {label}
        </button>
    )
}
