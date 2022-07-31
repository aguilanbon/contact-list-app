import React from 'react'

function Card() {
    return (
        <div className='h-14 border-b border-slate-200 bg-white rounded-sm shadow-md'>
            <div className='flex items-center justify-around py-2 px-4'>
                <div className='h-full flex items-center justify-center'>
                    <img src="./profile.png" alt="" className='w-8 h-8' />
                </div>
                <div className='flex md: flex-col md:flex-row md:items-center'>
                    <p className='md:text-sm text-xs font-semibold lg:mr-24 md:mr-6'>Ella Alolor</p>
                    <p className='text-xs'>Supervisor</p>
                </div>
                <div className='flex justify-between md:flex-row flex-col text-sm'>
                    <p className='lg:mr-24 md:mr-6 text-xs'>ella@gmail.com</p>
                    <p className='text-xs'>0995-651-0890</p>
                </div>
                <div className='sm:flex md:text-sm hidden'>
                    <p className='text-xs'>Lacao St. PPC</p>
                </div>
                <div className='flex text-xs p-2 rounded-full hover:bg-black hover:bg-opacity-10' >
                    <button className=' flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card