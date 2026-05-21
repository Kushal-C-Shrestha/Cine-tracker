import { Outlet } from 'react-router-dom'
import Navbar from '@/components/organisms/Navbar'

const MainLayout = () => {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <Navbar />
      <main className='flex flex-1 min-h-0 bg-zinc-800'>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout