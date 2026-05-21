import { NavLink } from 'react-router'
import { useAuth } from '@/features/auth/hooks/useAuth'
import Button from '@/components/atoms/Button'

const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm transition-colors hover:underline underline-offset-4 ${isActive ? 'text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'
    }`

const Navbar = () => {
    const { signOut } = useAuth()

    return (
        <div className="flex items-center py-6 px-8 bg-black text-white sticky top-0 z-10 shadow-lg">
            <div className="flex-1">
                <h1 className="text-2xl font-bold">CineTracker</h1>
            </div>

            <div className="flex gap-6">
                <NavLink to="/" end className={linkClass}>Home</NavLink>
                <NavLink to="/watchlist" className={linkClass}>My Watchlist</NavLink>
            </div>

            <div className="flex-1 flex justify-end">
                <Button variant="text" onClick={signOut}>
                    Logout
                </Button>
            </div>
        </div>
    )
}

export default Navbar
