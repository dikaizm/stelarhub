interface ButtonProps {
    variant?: 'solid' | 'outline'
    label: string
    className?: string
    icon?: React.ReactNode
    iconPosition?: 'left' | 'right'
    link?: string
    onClick?: () => void
}