import React from 'react'

function FriendCard({ friend }) {
    return (
        <div className='w-full flex'>
            <div className='w-full flex flex-col'>
                <div className='w-auto flex flex-row items-center p-2 bg-white hover:bg-slate-200 border-b border-slate-200 justify-evenly'>
                    <div className='w-full flex items-center'>
                        <img src="./profile.png" alt="" className='w-10 h-10' />
                        <div className='flex flex-col ml-2'>
                            <p className='text-sm font-semibold'>{friend?.fName} {friend?.lName}</p>
                        </div>
                    </div>
                    <div className='w-full flex flex-col  items-start ml-2'>
                        <div className='flex'>
                            <p className='text-xs w-full'>{friend?.email}</p>
                        </div>
                        <div className='flex'>
                            <p className='text-xs w-full'>{friend?.phone}</p>
                        </div>
                    </div>
                    <div className='w-full sm:flex hidden flex-col  items-start'>
                        <div className='flex'>
                            <p className='text-xs w-full'>{friend?.bday.slice(0, 10)}</p>
                        </div>
                        <div className='flex'>
                            <p className='text-xs w-full'>{friend?.address}</p>
                        </div>
                    </div>
                    <div className='w-auto flex sm:flex-row flex-col justify-end'>
                        <div className='p-2 hover:bg-red-50 rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-700 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FriendCard