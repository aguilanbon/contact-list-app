import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Directory from './Directory'
import Header from './Header'
import Sidebar from './Sidebar'

function Home() {

    let navigate = useNavigate()

    useEffect(() => {
        const auth = localStorage.getItem('auth')
        if (!auth) {
            navigate('/')
        }
    }, [])

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