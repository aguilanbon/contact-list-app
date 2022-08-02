import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Sidebar() {

    let navigate = useNavigate('/')

    const handleLogOut = () => {
        localStorage.setItem('uId', '')
        navigate('/')
    }

    return (
        <div className='w-auto min-h-screen flex shadow-xl bg-slate-800 text-white flex-col items-center justify-between pb-8 px-2'>
            <div className='flex flex-col'>
                <Link to='/home' className='flex p-2 mt-10 hover:bg-slate-900 rounded-lg'>
                    <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </div>
                    <p className='ml-4 md:flex hidden'>Home</p>
                </Link>
                <Link to='/profile' className='flex p-2 hover:bg-slate-900 rounded-lg'>
                    <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <p className='ml-4 md:flex hidden'>Profile</p>
                </Link>
            </div>
            <div className='flex'>
                <button to='/' className='flex p-2 hover:bg-slate-900 rounded-lg' onClick={() => handleLogOut()}>
                    <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <p className='text-xs ml-2 md:flex hidden'>Log Out</p>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Sidebar