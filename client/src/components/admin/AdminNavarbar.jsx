import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const AdminNavarbar = () => {
    return (
        <div className='flex items-center justify-between py-6 md:px-10 border-b  border-gray-300/30'>
            <Link to="/">
                <img src={assets.logo} alt="logo" className='w-36 h-auto' />
            </Link>
        </div>
    )
}

export default AdminNavarbar
