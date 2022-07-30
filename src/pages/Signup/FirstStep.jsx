import React from 'react'

function FirstStep() {
    return (
        <form action="" className='flex flex-col mt-4'>
            <div className='flex flex-row py-2'>
                <input type="text" placeholder='First name' className='border border-slate-200 text-md p-2 rounded-md outline-8 outline-blue-400 mr-2' />
                <input type="text" placeholder='Last name' className='border border-slate-200 text-md p-2 rounded-md outline-8 outline-blue-400' />
            </div>
            <div className='w-full flex flex-row py-2'>
                <input type="email" placeholder='Email' className='w-full border border-slate-200 text-md p-2 rounded-md outline-8 outline-blue-400' />
            </div>
            <div className='w-full flex flex-row py-2'>
                <input type="text" placeholder='Username' className='w-full border border-slate-200 text-md p-2 rounded-md outline-8 outline-blue-400' />
            </div>
            <div className='flex flex-col py-2'>
                <input type="password" name="password" id="" placeholder='Password' className='border border-slate-200 text-md p-2 rounded-md outline-blue-400' />
            </div>
            <div className='w-full flex justify-end py-2 mt-2'>
                <input type="button" value="Next" className='font-semibold bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md cursor-pointer outline-blue-400' />
            </div>
        </form>
    )
}

export default FirstStep