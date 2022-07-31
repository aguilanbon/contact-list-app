import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div className='xl:w-60 md:w-16 w-0 min-h-screen flex shadow-xl bg-slate-800 text-white'>
            <Link to='/home'>Home</Link>
            <Link to='/profile'>Profile</Link>
        </div>
    )
}

export default Sidebar