import React from 'react'
import { useContext } from 'react'
import SignUpContext from '../../helpers/SignUpContext'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react'

function SignUp() {

    const { signUpStep, setSignUpStep } = useContext(SignUpContext)

    const [userDetails, setUserDetails] = useState({
        fName: '',
        lName: '',
        username: '',
        password: '',
        email: '',
        address: '',
        phone: null,
        bday: null,
    })

    let navigate = useNavigate()

    const handleSignUp = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/users', {
                method: 'post',
                body: JSON.stringify(userDetails),
                headers: { 'Content-Type': 'application/json' }
            })
            await response.json()
            navigate('/')

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='w-full h-screen flex flex-col mb-16'>
            <div className='w-full mt-28 flex justify-center'>
                <div className='md:w-auto w-full h-auto flex flex-col border border-slate-300 shadow-xl rounded-lg md:p-10 sm:p-8 p-6 sm:mx-10 mx-4'>
                    {signUpStep > 1 ?
                        <div className='w-20 rounded-full flex items-center cursor-pointer text-gray-400 hover:text-black hover:bg-gray-100' onClick={() => setSignUpStep(1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                            <button>Go back</button>
                        </div>
                        : ''
                    }
                    <div className='w-full flex items-center justify-center'>
                        <h1 className='font-semibold text-xl text-gray-600'>Sign Up</h1>
                    </div>
                    {signUpStep === 1 &&
                        <>
                            <FirstStep setUserDetails={setUserDetails} />
                            <div className='w-full border-b border-slate-300 mt-4'></div>
                            <div className='w-full flex items-center justify-center'>
                                <Link to='/' className='mt-4 text-blue-500 hover:border-b hover:border-blue-500 cursor-pointer'>Go back to Log in page</Link>
                            </div>
                        </>
                    }
                    {signUpStep === 2 && <SecondStep setUserDetails={setUserDetails} handleSignUp={handleSignUp} />}

                </div>
            </div>
        </div>
    )
}

export default SignUp