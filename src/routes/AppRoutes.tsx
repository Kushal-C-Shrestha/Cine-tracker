import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AuthLayout from '@/layouts/AuthLayout'
import Register from '@/features/auth/pages/Register.tsx'
import Login from '@/features/auth/pages/Login.tsx'
import PublicRoute from './PublicRoute'

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
            </Routes>
        </Router>
    )
}