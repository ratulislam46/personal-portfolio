import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routes.jsx'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Toaster } from 'react-hot-toast'

Aos.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='font-baloo-da'>
      <Toaster position="left-bottom" reverseOrder={true} />
      <RouterProvider router={router}></RouterProvider>
    </div>
  </StrictMode>,
)
