import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'action' | 'text'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  children: ReactNode
}

const variants = {
  primary: 'bg-red-600 hover:bg-red-700 text-white rounded-md py-2 px-4 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
  action: 'bg-red-600 hover:bg-red-700 text-white rounded-md py-2 px-4 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
  secondary: 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-md py-2 px-4 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
  outline: 'border border-zinc-700 hover:border-zinc-500 text-zinc-200 hover:text-white bg-transparent rounded-md py-2 px-4 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
  text: 'text-zinc-400 hover:text-zinc-200 text-sm transition-colors bg-transparent',
}

const Button = ({ variant = 'primary', className = '', children, ...props }: ButtonProps) => (
  <button className={`${variants[variant]}${className ? ` ${className}` : ''}`} {...props}>
    {children}
  </button>
)

export default Button
