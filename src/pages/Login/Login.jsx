import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { useContext } from 'react';
import UserContext from '../../helpers/UserContext';

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const { dispatch } = useContext(UserContext)

    let navigate = useNavigate()

    const handleAction = async () => {
        const loginDetails = { username, password }
        try {
            setIsLoading(true)
            const response = await axios.post('https://contacts-app-mern.herokuapp.com/api/users/signin', loginDetails)
            localStorage.setItem('uId', response.data._id)
            localStorage.setItem('auth', response.data.role)
            dispatch({ type: 'SET_USER', payload: response.data })
            navigate('/home')
        } catch (error) {
            setErrorMsg(error.response.data.msg)
            setIsLoading(false)
        }
    }

    return (
        <div className='w-full h-screen flex flex-col'>
            <div className='w-full mt-28 flex justify-center'>
                <div className='md:w-96 sm:w-80 w-auto h-auto flex flex-col border border-slate-300 shadow-xl rounded-lg p-10'>
                    <div className='w-full flex flex-col items-center justify-center'>
                        <h1 className='font-semibold text-xl text-gray-600'>Log in</h1>
                        {errorMsg && <p className='text-xs text-red-500'>{errorMsg}</p>}
                    </div>
                    <form action="" className='flex flex-col mt-4'>
                        <div className='flex flex-col py-2'>
                            <input type="text" placeholder='Username' className='border border-slate-200 text-md p-2 rounded-md outline-8 outline-blue-400' onChange={e => setUsername(e.target.value)} />
                        </div>
                        <div className='flex flex-col py-2'>
                            <input type="password" name="password" id="" placeholder='Password' className='border border-slate-200 text-md p-2 rounded-md outline-blue-400' onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className='w-full flex py-2 mt-2'>
                            <input type="button" value={isLoading ? `Logging in...` : `Log in`} className='w-full font-semibold bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md cursor-pointer outline-blue-400' onClick={handleAction} />
                        </div>
                    </form>
                    <div className='w-full border-b border-slate-300 mt-4'></div>
                    <div className='w-full flex items-center justify-center mt-6'>
                        <Link to='/signup'>
                            <button className='font-semibold bg-green-400 hover:bg-green-500 text-white py-2 px-4 rounded-md outline-green-300'>Create Account</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login