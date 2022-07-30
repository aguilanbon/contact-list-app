import React from 'react'
import { useContext } from 'react'
import SignUpContext from '../../helpers/SignUpContext'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'

function SignUp() {

    const { signUpStep, setSignUpStep } = useContext(SignUpContext)

    return (
        <div className='w-full h-screen flex flex-col'>
            <div className='w-full mt-28 flex justify-center'>
                <div className='w-auto h-auto flex flex-col border border-slate-300 shadow-xl rounded-lg p-10'>
                    {signUpStep > 1 ?
                        <div className='w-20 rounded-full flex items-center cursor-pointer text-gray-400 hover:text-black hover:bg-gray-100' onClick={() => setSignUpStep(1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                            <button>Go back</button>
                        </div>
                        : ''
                    }
                    <div className='w-full flex items-center justify-center'>
                        <h1 className='font-semibold text-xl text-gray-600'>Sign Up</h1>
                    </div>
                    {signUpStep === 1 && <FirstStep />}
                    {signUpStep === 2 && <SecondStep />}
                </div>
            </div>
        </div>
    )
}

export default SignUp