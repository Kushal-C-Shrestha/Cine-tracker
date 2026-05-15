import { useState } from 'react'
import type { InputHTMLAttributes, Ref } from 'react'
import { Eye, EyeOff, Lock } from 'lucide-react'
import Input from '@/components/atoms/Input'

type PasswordFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  ref?: Ref<HTMLInputElement>
}

const PasswordField = ({ ref, ...props }: PasswordFieldProps) => {
  const [show, setShow] = useState(false)

  return (
    <Input
      ref={ref}
      type={show ? 'text' : 'password'}
      placeholder="Enter your password"
      leftIcon={<Lock size={18} className="text-zinc-500" />}
      rightIcon={
        <button
          type="button"
          onClick={() => setShow(prev => !prev)}
          className="text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      }
      {...props}
    />
  )
}

export default PasswordField
