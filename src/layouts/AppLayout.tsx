import { Link, Outlet, Navigate } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { Logo } from "@/components/Logo"
import NavMenu from '../components/Navmenu';
import { useAuth } from "@/hooks/useAuth";
import { Footer } from "@/components/Footer";

export const AppLayout = () => {
  const { data, isError, isLoading } = useAuth()
  
  if(isLoading) return 'Cargando...'
  if(isError) {
    return <Navigate to='/auth/login'/>
  }
  
  if(data) return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 py-5">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center px-5">
          <div className="w-64">
            <Link to={'/'}>
              <Logo />
            </Link>
          </div>
          <NavMenu name={data.name} />
        </div>
      </header>
      
      <main className="flex-1">
        <section className="max-w-screen-2xl mx-auto mt-10 p-5">
          <Outlet />
        </section>
      </main>
      
      <Footer />
      
      <ToastContainer
        pauseOnHover={false}
        pauseOnFocusLoss={false}
      />
    </div>
  )
}