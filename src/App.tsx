import AppRoutes from '@/routes/AppRoutes'
import { Toaster } from 'react-hot-toast'
import { supabase } from '@/lib/supabase'
import { setSession, clearSession } from '@/features/auth/store/authSlice'
import { watchlistApi } from '@/features/movies/services/watchlistApi'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const initSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()

      if (session) {
        dispatch(setSession({
          user: session.user,
          accessToken: session.access_token,
          refreshToken: session.refresh_token ?? null,
        }))
      }

      setReady(true)
    }

    initSession()

    const { data: { subscription } } =
      supabase.auth.onAuthStateChange((_, session) => {
        if (session) {
          dispatch(setSession({
            user: session.user,
            accessToken: session.access_token,
            refreshToken: session.refresh_token ?? null,
          }))
        } else {
          dispatch(clearSession())
          dispatch(watchlistApi.util.resetApiState())
        }
      })

    return () => subscription.unsubscribe()
  }, [dispatch])

  if (!ready) return null

  return (
    <>
      <Toaster />
      <AppRoutes />
    </>
  )
}

export default App
