import { useAppDispatch, useAppSelector } from "@/app/store/hooks"
import { useState } from "react"
import { selectUser } from "../store/authSelector"
import { setSession, clearSession } from "../store/authSlice"
import { signInService, signUpService, signOutService } from "../services"


export const useAuth = () => {
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useAppDispatch()
    const user = useAppSelector(selectUser)

    const signIn = async (email: string, password: string) => {
        try {
            setIsLoading(true)
            const { user, session } = await signInService(email, password)
            dispatch(setSession({
                user,
                accessToken: session?.access_token ?? null,
                refreshToken: session?.refresh_token ?? null,
            }))
        } catch (error : any) {
            throw new Error(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    const signUp = async (email: string, password: string) => {
        try {
            setIsLoading(true)
            const { user, session } = await signUpService(email, password)
            dispatch(setSession({
                user,
                accessToken: session?.access_token ?? null,
                refreshToken: session?.refresh_token ?? null,
            }))
        } catch (error : any) {
            throw new Error(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    const signOut = async () => {
        try {
            setIsLoading(true)
            await signOutService()
            dispatch(clearSession())
        } catch (error : any) {
            throw new Error(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    return { user, isLoading, signIn, signOut, signUp }
}
