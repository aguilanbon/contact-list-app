import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

function Card({ userList, friends }) {

    const [isAdmin, setIsAdmin] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)

    const { reqId } = { reqId: localStorage.getItem('uId') }

    const handleReq = async (id) => {
        const reqId = { reqId: localStorage.getItem('uId') }
        await axios.patch(`http://localhost:4000/api/users/fr/${id}`, reqId)
        setIsDisabled(true)
        toast('Friend request send', {
            icon: '🤝'
        })
    }

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
                        <p className='md:text-sm text-xs font-semibold mr-1'>{userList?.fName}</p>
                        <p className='md:text-sm text-xs font-semibold sm:flex hidden'>{userList?.lName}</p>
                    </div>
                    <p className={`text-xs 
                    ${userList?.role === 'user' && 'text-blue-600'}
                    ${userList?.role === 'supervisor' && 'text-green-600'}
                    ${userList?.role === 'admin' && 'text-orange-600'}
                    `}>{userList?.role}</p>
                </div>
                <div className='flex md:flex-row flex-col md:w-1/3 w-1/2 justify-between items-start'>
                    <div className='flex justify-between flex-col text-sm'>
                        <p className='text-xs '>{userList?.email}</p>
                        <p className='text-xs'>{userList?.phone}</p>
                    </div>
                </div>
                <div className='sm:flex md:text-sm hidden md:w-1/3 w-1/2'>
                    <p className='text-xs'>{userList?.address}</p>
                </div>

                <div className='flex w-auto items-center'>
                    {friends.includes(reqId) ?
                        <div className='w-4 flex text-xs justify-end mr-1' >
                            <div className='flex items-center p-1 rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-slate-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        :
                        <div className='w-4 flex text-xs justify-end mr-1' >
                            <button className={`flex items-center cursor-pointer p-1 rounded-full hover:text-white hover:bg-green-700 text-green-700 ${isDisabled && `hidden`}`} disabled={isDisabled} onClick={() => handleReq(userList._id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                </svg>
                            </button>
                        </div>

                    }


                    {isAdmin &&
                        <div className='w-4 flex text-xs' >
                            <Link to={`/admin/${userList._id}`} >
                                <button className=' flex items-center cursor-pointer rounded-full hover:bg-blue-500 hover:text-white hover:scale-125 text-blue-500'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    }
                </div>


            </div>
        </div>
    )
}

export default Card