import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function Layout() {
  return (
    <div>
        <Header />
        <div className='flex ' >
            <Sidebar />
            <Outlet />
        </div>
    </div>
  )
}
