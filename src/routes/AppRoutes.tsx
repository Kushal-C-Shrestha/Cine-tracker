import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AuthLayout from '@/layouts/AuthLayout'
import Register from '@/features/auth/pages/Register.tsx'
import Login from '@/features/auth/pages/Login.tsx'
import PublicRoute from './PublicRoute'
import ProtectedRoute from './ProtectedRoute'
import Home from '@/features/movies/pages/Home'
import MainLayout from '@/layouts/MainLayout'
import Watchlist from '@/features/movies/pages/Watchlist'

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route element={<PublicRoute />}>
                    <Route element={<AuthLayout />} >
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                    </Route>
                </Route>
                <Route element={<ProtectedRoute />}>
                    <Route element={<MainLayout />} >
                        <Route path="/" element={<Home />} />
                        <Route path='/watchlist' element={<Watchlist />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    )
}