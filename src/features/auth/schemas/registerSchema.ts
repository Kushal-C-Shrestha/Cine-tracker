import { z } from 'zod'

export const registerSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }).regex(/^(?=.*[A-Za-z])(?=.*\d).+$/, {
        message: "Password must contain at least one letter and one number",
    }),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
})