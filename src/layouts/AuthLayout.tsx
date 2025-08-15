import { Logo } from '@/components/Logo';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export const AuthLayout = () => {
  return (
    <>
      <div className='bg-gray-800 min-h-screen flex flex-col md:flex-row justify-center'>

        {/* Logo lado izquierdo / arriba en móvil */}
        <div className='flex flex-col items-center justify-center w-full md:w-2/5 p-8 md:mr-12 ml-40'>
          {/* Logo más grande */}
          <div className="w-80 h-auto">
            <Logo />
          </div>

          {/* Card con datos de prueba */}
          <div className="mt-6 bg-gray-700 text-white p-6 rounded-xl shadow-lg text-center w-full max-w-sm">
            <h2 className="font-bold text-lg mb-2">Login de prueba</h2>
            <p><span className="font-semibold">Email:</span> correo@correo.com</p>
            <p><span className="font-semibold">Contraseña:</span> 12345678</p>
          </div>
        </div>

        {/* Formulario lado derecho / abajo en móvil */}
        <div className='flex items-center justify-center w-full md:w-3/5 p-8 mr-40'>
          <div className='w-full max-w-md'>
            <Outlet />
          </div>
        </div>

      </div>

      <ToastContainer
        pauseOnHover={false}
        pauseOnFocusLoss={false}
      />
    </>
  )
}
