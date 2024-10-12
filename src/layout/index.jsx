import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './sidebar'
import Header from './header'

export default function Layout() {
  return (
    <div className='flex items-center'>
        <SideBar />
        <div>
          <Header />
          <Outlet />
        </div>
    </div>
  )
}
