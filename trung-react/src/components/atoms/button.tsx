import type React from "react"

interface ButtonProps {
  children: React.ReactNode,
  className?: string,
  type?: "submit" | "reset" | "button" | undefined,
  onClick: () => void
}

function Button({ type = 'button', children, className = '', ...restProps }: ButtonProps) {
  return (
    <button
      {...restProps}
      type={type}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded cursor-pointer ${className}`}
    >
      {children}
    </button>
  )
}

export default Button