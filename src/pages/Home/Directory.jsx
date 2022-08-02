import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Card from './Card'

function Directory() {

    const [userLists, setUserLists] = useState(null)

    useEffect(() => {
        const getUsers = async () => {
            const response = await axios.get('http://localhost:4000/api/users')
            setUserLists(response.data)
        }

        getUsers()
    }, [])

    return (
        <div className='w-full h-auto flex sm:p-6 p-2'>
            <div className='w-full h-auto flex flex-col'>
                <div className='w-full flex items-center static'>
                    <input type="text" name="search" id="" className='w-full border-b border-slate-800 outline-none bg-inherit pl-10 py-1' />
                    <div className='fixed'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className='fixed sm:right-5 right-1 flex items-center justify-center'>
                        <button className='py-1 px-4 text-white text-sm rounded-full bg-cyan-600 hover:bg-cyan-700'>Search</button>
                    </div>
                </div>
                <div className='w-full h-96 mt-4'>
                    {userLists?.map(userList => (
                        <Card userList={userList} key={userList._id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Directory