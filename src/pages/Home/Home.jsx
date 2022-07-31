import React from 'react'
import Directory from './Directory'
import Header from './Header'
import Sidebar from './Sidebar'

function Home() {
    return (
        <div className='w-full min-h-screen flex bg-slate-100'>
            <Sidebar />
            <div className='w-full h-auto flex flex-col'>
                <Header />
                <Directory />
            </div>
        </div>
    )
}

export default Home