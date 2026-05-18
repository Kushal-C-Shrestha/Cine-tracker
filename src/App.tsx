import AppRoutes from '@/routes/AppRoutes'
import { Toaster } from 'react-hot-toast'
import { useEffect, useState } from "react";
import { useAppDispatch } from './app/store/hooks';
import { clearSession, setSession } from '@/features/auth/store/authSlice';
import { supabase } from './lib/supabase';



function App() {
  const [ready, setReady] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const initSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        dispatch(setSession({
          user: session.user,
          accessToken: session.access_token,
          refreshToken: session.refresh_token
        }))
      } else {
        dispatch(clearSession());
      }
      setReady(true);
    }

    initSession();
  }, [dispatch])

  if (!ready) return null;

  return (
    <>
      <Toaster />
      <AppRoutes />
    </>
  )
}

export default App
