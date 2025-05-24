import React from 'react'

/**
 * @usage: 
 * <PrimaryButton label="Next" icon={<FiArrowRight />} iconPosition="right" variant="outline" onClick={() => console.log('Next step')} />
 */
const PrimaryButton = ({
  label,
  className = '',
  icon,
  iconPosition = 'left', // 'left' | 'right'
  onClick,
  link,
  variant = 'solid' // 'solid' | 'outline'
}: ButtonProps) => {
  if (link && onClick) throw new Error('PrimaryButton cannot have both link and onClick props')

  const baseStyle = `flex gap-2 justify-between items-center w-fit px-5 py-3 rounded-lg transition duration-300 ${className}`

  const solidStyle = `bg-primary text-white border border-gray-800 hover:bg-gray-600`
  const outlineStyle = `border border-gray-800 hover:bg-primary-light/10`

  const buttonStyle = `${baseStyle} ${variant === 'outline' ? outlineStyle : solidStyle}`

  return (
    <>
      {link ? (
        <a href={link} className={buttonStyle}>
          <ButtonContent label={label} icon={icon} iconPosition={iconPosition} />
        </a>
      ) : (
        <button
          onClick={onClick}
          type="button"
          className={buttonStyle}>
          <ButtonContent label={label} icon={icon} iconPosition={iconPosition} />
        </button>
      )}
    </>
  )
}

const ButtonContent = ({ label, icon, iconPosition }: ButtonProps) => {
  return (
    <>
      {icon && iconPosition === 'left' && icon}
      <span className='whitespace-nowrap'>{label}</span>
      {icon && iconPosition === 'right' && icon}
    </>
  )
}

export default PrimaryButton