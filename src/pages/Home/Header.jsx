import React from 'react'

function Header() {
    return (
        <div className='w-full lg:h-14 md:h-12 h-10 flex items-center bg-white border-b border-slate-200 shadow-sm'>
            <div className='w-full flex'>
                <h1 className='text-slate-800 lg:text-xl text-lg ml-8'>Contact List Management</h1>
            </div>
        </div>
    )
}

export default Header