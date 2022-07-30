import React from 'react'
import Header from './Header'
import Profile from './Profile'
import Sidebar from './Sidebar'

function Home() {
    return (
        <div className='w-full min-h-screen flex bg-slate-100'>
            <Sidebar />
            <div className='w-full h-auto flex flex-col'>
                <Header />
                <Profile />
            </div>
        </div>
    )
}

export default Home