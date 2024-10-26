import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { ScrollRestoration } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MainWrapper = (routes) => {
  return (
    routes.map((route) => ({
        ...route,
        element: (
            <div className="flex flex-col min-h-screen w-[100%]">
              <ScrollRestoration />
              <ToastContainer />
              <Navbar />
              <main className="flex-[100%] flex flex-col items-center md:mt-16  md:px-10 px-5">{route.element}</main>
              <Footer />
            </div>
          ),
    }))
  )
}

export default MainWrapper