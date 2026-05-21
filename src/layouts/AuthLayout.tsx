import { Outlet } from "react-router-dom"
import authImage from "@/assets/auth-bg.jpg"

const AuthLayout = () => {
  return (
    <div className="flex h-screen">
      <div className=" relative flex flex-1 ">
        <img src={authImage} alt="auth-bg" className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="flex flex-1 justify-center items-center bg-zinc-950">
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout