import Input from '@/components/atoms/Input'
import FormField from '@/components/molecules/FormField'
import PasswordField from '@/components/molecules/PasswordField'
import Button from '@/components/atoms/Button'
import { User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '@/features/auth/schemas/registerSchema'
import { Link } from 'react-router'

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(registerSchema) })


    const onSubmit = async (data: { email: string; password: string; confirmPassword: string }) => {
        console.log(data);
    }

    return (
        <form className="flex flex-col w-100 gap-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold text-zinc-300 text-center">Create an account</h1>
                <p className="text-zinc-500 text-center">Join us to manage your movies.</p>
            </div>
            <div className="flex flex-col gap-4">
                <FormField label="Email" error={errors.email?.message}>
                    <Input type="email" placeholder="Enter your email" leftIcon={<User size={18} className="text-zinc-500" />} {...register("email")} />
                </FormField>
                <FormField label="Password" error={errors.password?.message}>
                    <PasswordField {...register("password")} />
                </FormField>
                <FormField label="Confirm Password" error={errors.confirmPassword?.message}>
                    <PasswordField {...register("confirmPassword")} />
                </FormField>
            </div>
            <div className="flex flex-col gap-4">
                <Button type="submit" variant="action" className="w-full font-medium">
                    Sign Up
                </Button>
                <p className="text-sm text-zinc-500 text-center">
                    Already have an account?{' '}
                    <Link to="/login" className="text-red-500 hover:underline">Sign In</Link>
                </p>
            </div>
        </form>
    )
}

export default Register
