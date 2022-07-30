import React from 'react'

function Profile() {
    return (
        <div className='w-full h-auto flex lg:p-10 md:p-6 p-4'>
            <div className='w-full flex'>
                <div className='md:w-1/4 w-full flex flex-col items-center'>
                    <div className='w-full border border-slate-200 rounded-lg py-4 px-8 shadow-md'>
                        <div className='flex items-center justify-center'>
                            <img src="./profile.png" alt="" className='w-20 md:w-28' />
                        </div>
                        <div className='w-full flex flex-col items-center mt-8 md:px-10'>
                            <div className='flex flex-col items-center'>
                                <h2 className='text-sm md:text-md text-slate-900 font-bold'>Bon Aguilan</h2>
                                <h1 className='text-sm md:text-md text-slate-800'>Jr. Software Engineer</h1>
                                <h2 className='text-sm md:text-md text-slate-600'>aguilanbon@gmail.com</h2>
                                <h2 className='text-sm md:text-md text-slate-600'>+63995-651-0890</h2>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col mt-8 border border-slate-200 px-4 py-2 rounded-lg shadow-lg'>
                        <div className='w-full'>
                            <h2 className='font-xl font-bold'>About</h2>
                        </div>
                        <div className='flex flex-col mt-4'>
                            <div className='mb-4'>
                                <h1 className='text-xs md:text-md font-semibold text-slate-400'>Gender</h1>
                                <h2 className='text-sm md:text-md'>Male</h2>
                            </div>
                            <div className='mb-4'>
                                <h1 className='text-xs md:text-md font-semibold text-slate-400'>Age</h1>
                                <h2 className='text-sm md:text-md'>26</h2>
                            </div>
                            <div className='mb-4'>
                                <h1 className='text-xs md:text-md font-semibold text-slate-400'>Birthday</h1>
                                <h2 className='text-sm md:text-md'>October 1, 1995</h2>
                            </div>
                            <div className='mb-4'>
                                <h1 className='text-xs md:text-md font-semibold text-slate-400'>Address</h1>
                                <h2 className='text-sm md:text-md'>Camias st., Narra, Palawan</h2>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Profile