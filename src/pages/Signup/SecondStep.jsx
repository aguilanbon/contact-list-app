import React from 'react'

function SecondStep({ setUserDetails, handleSignUp }) {

    const handleUser = (e) => {
        setUserDetails(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <form action="" className='md:w-96 flex flex-col mt-4'>
            <div className='w-full lex flex-row py-2'>
                <input type="text" placeholder='Address' name='address' className='w-full border border-slate-200 text-md p-2 rounded-md outline-8 outline-blue-400 mr-2' onChange={handleUser} />
            </div>
            <div className='w-full flex py-2'>
                <input type="number" placeholder='Phone no.' name='phone' className='w-full border border-slate-200 text-md p-2 rounded-md outline-8 outline-blue-400' onChange={handleUser} />
            </div>
            <div className='w-full flex flex-col py-2'>
                <label htmlFor="birthday">Birthday</label>
                <input type="date" placeholder='Birthday' name='bday' className='w-full border border-slate-200 text-md p-2 rounded-md outline-8 outline-blue-400 mt-2' onChange={handleUser} />
            </div>
            <div className='w-full flex justify-end py-2 mt-2'>
                <input type="button" value="Submit" className='font-semibold bg-green-400 hover:bg-green-500 text-white py-2 px-4 rounded-md cursor-pointer outline-blue-400' onClick={handleSignUp} />
            </div>
        </form>
    )
}

export default SecondStep