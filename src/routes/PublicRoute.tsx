import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '@/app/store/hooks'
import { selectUser } from '@/features/auth/store/authSelector'

const PublicRoute = () => {
    const user = useAppSelector(selectUser)
    if (user) return <Navigate to="/" replace />
    return <Outlet />
}

export default PublicRoute
