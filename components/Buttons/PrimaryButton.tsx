import React from 'react'

const PrimaryButton = ({ label, className, icon, iconPosition = 'left', onClick, link }: ButtonProps) => {
  if (link && onClick) throw new Error('PrimaryButton cannot have both link and onClick props')

  const buttonStyle = `flex gap-2 justify-between font-semibold items-center w-fit bg-primary px-5 py-3 rounded-full transition-colors hover:bg-primary-hover duration-300 ${className}`

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