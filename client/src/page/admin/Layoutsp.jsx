import React from 'react'
import AdminNavarbar from '../../components/admin/AdminNavarbar'
import AdminSidebar from '../../components/admin/AdminSidebar'
import { Outlet } from 'react-router-dom'

const Layoutsp = () => {
  return (
    <>
      <AdminNavarbar />
      <div className='flex'>
        <AdminSidebar />
        <div className='flex-1 px-4 py-10 md:px10 h-[calc(100vh-64px)] overflow-y-auto9p'>
          <Outlet />
        </div>
      </div>

    </>
  )
}

export default Layoutsp
