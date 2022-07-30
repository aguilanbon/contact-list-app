import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

function Home() {
    return (
        <div className='w-full min-h-screen flex bg-slate-100'>
            <Sidebar />
            <div className='w-full flex flex-col'>
                <Header />
            </div>
        </div>
    )
}

export default Home