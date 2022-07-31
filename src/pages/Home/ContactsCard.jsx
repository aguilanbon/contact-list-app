import React from 'react'

function ContactsCard() {
    return (
        <div className='w-full flex'>
            <div className='w-full flex flex-col'>
                <div className='w-full flex flex-row items-center justify-between p-2 hover:bg-slate-200 border-b border-slate-200'>
                    <div className='flex items-center'>
                        <img src="./profile.png" alt="" className='w-10 h-10' />
                        <div className='flex flex-col ml-2'>
                            <p className='text-sm font-semibold'>Ella Alolor</p>
                            <p className='text-xs'>HR Manager</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <p className='text-xs'>ella@gmail.com</p>
                    </div>
                    <div className='flex'>
                        <p className='text-xs'>+63 995-651-0890</p>
                    </div>
                    <div className='flex'>
                        <div className='p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </div>
                        <div className='p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-700 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactsCard