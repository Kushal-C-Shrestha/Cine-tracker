import { supabase } from '@/lib/supabase'

export const signInService = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    })
    if (error) {
        const errorMessage = (String(error)).split(':')[1]
        throw new Error(errorMessage);
    }
    return data;
}

export const signUpService = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
        email,
        password
    })
    if (error) {
        const errorMessage = (String(error)).split(':')[1]
        throw new Error(errorMessage);
    }
    return data;
}

export const signOutService = async () => {
    try {
        const { error } = await supabase.auth.signOut()
        if (error) {
            throw new Error(String(error))
        }
    } catch (error) {
        throw new Error(String(error))
    }
}
