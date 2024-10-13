import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './sidebar'
import Header from './header'

export default function Layout() {
  return (
    <div className='flex '>
        <SideBar />
        <div className='flex-1'>
          <Header />
          <Outlet />
        </div>
    </div>
  )
}
