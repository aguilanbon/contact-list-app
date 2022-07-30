import React from 'react'
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className='w-full h-screen flex flex-col'>
            <div className='w-full mt-28 flex justify-center'>
                <div className='w-96 h-auto flex flex-col border border-slate-300 shadow-xl rounded-lg p-10'>
                    <div className='w-full flex items-center justify-center'>
                        <h1 className='font-semibold text-xl text-gray-600'>Log in</h1>
                    </div>
                    <form action="" className='flex flex-col mt-4'>
                        <div className='flex flex-col py-2'>
                            <input type="text" placeholder='Username' className='border border-slate-200 text-md p-2 rounded-md outline-8 outline-blue-400' />
                        </div>
                        <div className='flex flex-col py-2'>
                            <input type="password" name="password" id="" placeholder='Password' className='border border-slate-200 text-md p-2 rounded-md outline-blue-400' />
                        </div>
                        <div className='w-full flex py-2 mt-2'>
                            <input type="button" value="Log in" className='w-full font-semibold bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md cursor-pointer outline-blue-400' />
                        </div>
                    </form>
                    <div className='w-full border-b border-slate-300 mt-4'></div>
                    <div className='w-full flex items-center justify-center mt-6'>
                        <Link to='signup'>
                            <button className='font-semibold bg-green-400 hover:bg-green-500 text-white py-2 px-4 rounded-md outline-green-300'>Create Account</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login