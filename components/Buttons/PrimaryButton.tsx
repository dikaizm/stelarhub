'use client'

import React from 'react'

export interface ButtonProps {
  label: string
  className?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  onClick?: () => void
  link?: string
  variant?: 'solid' | 'outline' | 'ghost'
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
}

const PrimaryButton = ({
  label,
  className = '',
  icon,
  iconPosition = 'left',
  onClick,
  link,
  variant = 'solid',
  type = 'button',
  fullWidth = false
}: ButtonProps) => {
  if (link && onClick) console.warn('PrimaryButton: provided both link and onClick, link will take precedence if rendered as anchor tag but behaviour might be unexpected.')

  const baseStyle = `inline-flex rounded-full gap-2 justify-center items-center px-6 py-3 font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${fullWidth ? 'w-full' : 'w-fit'} ${className}`

  const variants = {
    solid: `bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20 hover:shadow-[0_10px_25px_-5px_rgba(14,165,233,0.4),0_0_0_4px_rgba(14,165,233,0.3),0_0_0_10px_rgba(14,165,233,0.2),0_0_0_18px_rgba(14,165,233,0.1)] active:scale-95 active:shadow-[0_0_0_4px_rgba(14,165,233,0.4),0_0_0_8px_rgba(14,165,233,0.3)]`,
    outline: `bg-transparent border border-border text-text hover:bg-background-subtle hover:border-primary/50 hover:text-primary`,
    ghost: `bg-transparent text-text-secondary hover:text-primary hover:bg-background-subtle`
  }

  const buttonStyle = `${baseStyle} ${variants[variant] || variants.solid}`

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="text-xl">{icon}</span>}
      <span className='whitespace-nowrap'>{label}</span>
      {icon && iconPosition === 'right' && <span className="text-xl">{icon}</span>}
    </>
  )

  if (link) {
    return (
      <a href={link} className={buttonStyle}>
        {content}
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={buttonStyle}
    >
      {content}
    </button>
  )
}

export default PrimaryButton