import type React from "react"
import clsx from "clsx"

interface ButtonProps {
  children?: React.ReactNode,
  className?: string,
  variant?: string,
  type?: "submit" | "reset" | "button" | undefined,
  onClick?: () => void
}

// primary, danger, warning
function Button({ type = 'button', children, className = '', variant = 'primary', ...restProps }: ButtonProps) {

  return (
    <button
      {...restProps}
      type={type}
      className={clsx(
        'text-white font-bold py-1 px-2 rounded cursor-pointer',
        variant === 'primary' 
          ? 'bg-blue-500 hover:bg-blue-700' 
          : variant === 'warning' ? 'bg-amber-300 hover:bg-amber-500'
          : variant === 'danger' ? 'bg-red-400 hover:bg-red-700'
          : 'bg-amber-50',
        className
      )}
      // className={`${variant === 'primary' ? 'bg-blue-500 hover:bg-blue-700' : variant === 'warning' ? 'bg-amber-300 hover:bg-amber-500' : ''}  text-white font-bold py-1 px-2 rounded cursor-pointer ${className}`}
    >
      {children}
    </button>
  )
}

export default Button