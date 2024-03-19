import { Outlet } from "react-router-dom";
import { Toaster } from 'sonner'
import { HeaderAuth } from "../components";

export const PageRouterAuth = () => {
  return (
    <>  
      <Toaster/>
      <HeaderAuth />
      <div className="p-5 h-auto xl:min-w-full xl:flex xl:justify-center">
        <Outlet/>
      </div>
    </>
  )
}
