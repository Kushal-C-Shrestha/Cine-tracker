import type { InputHTMLAttributes, ReactNode } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const Input = ({ leftIcon, rightIcon, className = '', ...props }: InputProps) => (
  <div className="relative flex items-center">
    {leftIcon && (
      <span className="absolute left-3 flex items-center ">
        {leftIcon}
      </span>
    )}
    <input
      className={`w-full bg-zinc-900 border border-zinc-700 text-zinc-200 placeholder-zinc-500 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-zinc-500 transition-colors${leftIcon ? ' pl-9' : ''}${rightIcon ? ' pr-9' : ''}${className ? ` ${className}` : ''}`}
      {...props}
    />
    {rightIcon && (
      <span className="absolute right-3 flex items-center">
        {rightIcon}
      </span>
    )}
  </div>
)

export default Input
