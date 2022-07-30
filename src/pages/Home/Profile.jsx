import React from 'react'

function Profile() {
    return (
        <div className='w-full h-auto flex md:p-6 p-4'>
            <div className='w-full h-auto flex md:flex-row flex-col'>
                <div className='md:w-1/4 w-full flex flex-col items-center'>
                    <div className='w-full border border-slate-200 rounded-lg py-4 px-8 shadow-md'>
                        <div className='flex items-center justify-center'>
                            <img src="./profile.png" alt="" className='w-20 md:w-28' />
                        </div>
                        <div className='w-full flex flex-col items-center mt-2 md:px-10'>
                            <div className='flex flex-col items-center'>
                                <h2 className='text-md md:text-lg text-cyan-700 font-bold'>Bon Aguilan</h2>
                                <h1 className='text-sm md:text-md text-slate-700'>Jr. Software Engineer</h1>
                                <h2 className='text-sm md:text-md text-slate-600 opacity-70'>aguilanbon@gmail.com</h2>
                                <h2 className='text-sm md:text-md text-slate-600 opacity-70'>+63995-651-0890</h2>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col mt-4 border border-slate-200 px-4 py-2 rounded-lg shadow-lg'>
                        <div className='w-full'>
                            <h2 className='font-2xl font-bold'>Additional Information</h2>
                        </div>
                        <div className='flex flex-col mt-1'>
                            <div className='mb-2'>
                                <h1 className='text-xs md:text-md font-semibold text-slate-400'>Gender</h1>
                                <h2 className='text-sm md:text-md'>Male</h2>
                            </div>
                            <div className='mb-2'>
                                <h1 className='text-xs md:text-md font-semibold text-slate-400'>Age</h1>
                                <h2 className='text-sm md:text-md'>26</h2>
                            </div>
                            <div className='mb-2'>
                                <h1 className='text-xs md:text-md font-semibold text-slate-400'>Birthday</h1>
                                <h2 className='text-sm md:text-md'>October 1, 1995</h2>
                            </div>
                            <div className='mb-2'>
                                <h1 className='text-xs md:text-md font-semibold text-slate-400'>Address</h1>
                                <h2 className='text-sm md:text-md'>Camias st., Narra, Palawan</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:w-3/4 w-full min-h-96 lg:ml-8 md:ml-4 md:mt-0 mt-4 border-x border-b border-slate-200 flex-flex-col mb-8 rounded-lg'>
                    <div className='w-full flex bg-slate-200 rounded-t-lg'>
                        <div className='w-full py-2 px-4 '>
                            <h1 className='text-cyan-700'>My Contacts</h1>
                        </div>
                    </div>
                    <div className='flex flex-col'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile