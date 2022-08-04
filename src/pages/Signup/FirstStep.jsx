import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import SignUpContext from '../../helpers/SignUpContext'

function FirstStep({ setUserDetails, userDetails }) {

    const { setSignUpStep } = useContext(SignUpContext)
    const [signUpErrors, setSignUpErrors] = useState([])

    const handleUser = (e) => {
        setUserDetails(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleAction = () => {
        if (userDetails.password.length < 4) {
            setSignUpErrors(prev => ([...prev, 'password must be atleast 4 characters']))
            return
        }
        setSignUpStep(2)
    }

    return (
        <form action="" className='w-full flex flex-col mt-4'>
            <div className='w-full flex items-center'>
                {signUpErrors.map((er, index) => (
                    <p key={index} className='text-xs text-red-400'>{er}</p>
                ))}
            </div>
            <div className='flex flex-col md:flex-row py-2'>
                <input type="text" placeholder='First name' name='fName' className='border border-slate-200 text-md p-2 rounded-md outline-8 outline-blue-400 md:mr-2 mr-0' onChange={handleUser} />
                <input type="text" placeholder='Last name' name='lName' className='mt-4 md:mt-0 border border-slate-200 text-md p-2 rounded-md outline-8 outline-blue-400' onChange={handleUser} />
            </div>
            <div className='w-full flex flex-row py-2'>
                <input type="email" placeholder='Email' name='email' className='w-full border border-slate-200 text-md p-2 rounded-md outline-8 outline-blue-400' onChange={handleUser} />
            </div>
            <div className='w-full flex flex-row py-2'>
                <input type="text" placeholder='Username' name='username' className='w-full border border-slate-200 text-md p-2 rounded-md outline-8 outline-blue-400' onChange={handleUser} />
            </div>
            <div className='flex flex-col py-2'>
                <input type="password" name="password" id="" placeholder='Password' className='border border-slate-200 text-md p-2 rounded-md outline-blue-400' onChange={handleUser} />
            </div>
            <div className='w-full flex justify-end py-2 mt-2'>
                <input type="button" value="Next" className='font-semibold bg-green-400 hover:bg-green-500 text-white py-2 px-4 rounded-md cursor-pointer outline-blue-400' onClick={() => handleAction()} />
            </div>
        </form>
    )
}

export default FirstStep