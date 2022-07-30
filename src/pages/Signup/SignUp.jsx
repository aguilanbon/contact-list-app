import React from 'react'
import { useContext } from 'react'
import SignUpContext from '../../helpers/SignUpContext'
import FirstStep from './FirstStep'

function SignUp() {

    const { signUpStep } = useContext(SignUpContext)

    return (
        <div className='w-full h-screen flex flex-col'>
            <div className='w-full mt-28 flex justify-center'>
                <div className='w-auto h-auto flex flex-col border border-slate-300 shadow-xl rounded-lg p-10'>
                    <div className='w-full flex items-center justify-center'>
                        <h1 className='font-semibold text-xl text-gray-600'>Sign Up</h1>
                    </div>
                    {signUpStep === 1 && <FirstStep />}
                </div>
            </div>
        </div>
    )
}

export default SignUp