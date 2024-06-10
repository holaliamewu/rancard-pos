import React, { useState, createContext } from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function Layout() {

  return (
    <div className='w-full max-w-[100vw] min-h-screen relative '>
          <Header />
         <div className='flex ' >
           <Sidebar />
              <Outlet />
          </div>
      </div>
  )
}
