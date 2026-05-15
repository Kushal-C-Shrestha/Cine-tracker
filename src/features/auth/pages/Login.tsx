import FormField from "@/components/molecules/FormField"
import Input from "@/components/atoms/Input"
import PasswordField from "@/components/molecules/PasswordField"
import Button from "@/components/atoms/Button"
import { User } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "@/features/auth/schemas/loginSchema"
import { Link } from "react-router"

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(loginSchema) })

    const onSubmit = async (data: { email: string; password: string }) => {
        console.log(data);
    }

    return (
        <form className="flex flex-col w-100 gap-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold text-zinc-300 text-center">Sign In</h1>
                <p className="text-zinc-500 text-center">Welcome back! Please enter your details.</p>
            </div>
            <div className="flex flex-col gap-4">
                <FormField label="Email" error={errors.email?.message}>
                    <Input type="email" placeholder="Enter your email" leftIcon={<User size={18} className="text-zinc-500" />} {...register("email")} />
                </FormField>
                <FormField label="Password" error={errors.password?.message}>
                    <PasswordField {...register("password")} />
                </FormField>
                <div className="flex items-center justify-between">
                    <label className="flex items-center text-sm text-zinc-400">
                        <input type="checkbox" />
                        <span className="ml-2">Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-red-500 hover:underline">Forgot your password?</a>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <Button type="submit" variant="action" className="w-full font-medium">
                    Sign In
                </Button>
                <p className="text-sm text-zinc-500 text-center">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-red-500 hover:underline">Sign Up</Link>
                </p>
            </div>
        </form>
    )
}

export default Login
