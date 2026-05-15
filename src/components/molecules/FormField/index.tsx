import type { ReactNode } from 'react'

type FormFieldProps = {
  label: string
  error?: string
  children: ReactNode
}

const FormField = ({ label, error, children }: FormFieldProps) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-medium text-zinc-300">{label}</label>
    {children}
    {error && <p className="text-xs text-red-500">{error}</p>}
  </div>
)

export default FormField
