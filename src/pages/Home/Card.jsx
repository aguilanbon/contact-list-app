import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Card({ userList }) {

    const [isAdmin, setIsAdmin] = useState(false)

    useState(() => {
        const auth = localStorage.getItem('auth')
        if (auth === 'admin') {
            setIsAdmin(true)
        }
    }, [])

    return (
        <div className='h-14 border-b border-slate-200 bg-white rounded-sm shadow-md truncate'>
            <div className='flex w-full items-center py-2 px-4'>
                <div className='h-full flex items-center justify-center md:w-1/6 w-12 mr-2'>
                    <img src="./profile.png" alt="" className='w-8 h-8' />
                </div>
                <div className='flex flex-col items-start w-1/3'>
                    <div className='flex sm:flex-row flex-col'>
                        <p className='md:text-sm text-xs font-semibold mr-1'>{userList.fName}</p>
                        <p className='md:text-sm text-xs font-semibold sm:flex hidden'>{userList.lName}</p>
                    </div>
                    <p className='text-xs'>{userList.role}</p>
                </div>
                <div className='flex md:flex-row flex-col md:w-1/3 w-1/2 justify-between items-start'>
                    <div className='flex justify-between flex-col text-sm'>
                        <p className='text-xs '>{userList.email}</p>
                        <p className='text-xs'>{userList.phone}</p>
                    </div>
                </div>
                <div className='sm:flex md:text-sm hidden md:w-1/3 w-1/2'>
                    <p className='text-xs'>{userList.address}</p>
                </div>
                {!isAdmin &&
                    <div className='w-4 flex text-xs justify-end' >
                        <button className=' flex items-center cursor-pointer p-2 rounded-full hover:bg-black hover:bg-opacity-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                        </button>
                    </div>
                }

                {isAdmin &&
                    <div className='w-4 flex text-xs justify-end' >
                        <Link to={`/admin/${userList._id}`} >
                            <button className=' flex items-center cursor-pointer py-1 px-2 rounded-full hover:bg-blue-500 hover:text-white border border-blue-500 text-blue-500'>
                                Action
                            </button>
                        </Link>
                    </div>
                }


            </div>
        </div>
    )
}

export default Card