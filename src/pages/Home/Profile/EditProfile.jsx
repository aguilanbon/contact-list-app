import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../../helpers/UserContext'
import Header from '../Header'
import Sidebar from '../Sidebar'



function EditProfile() {
    let navigate = useNavigate()

    const [updated, setUpdated] = useState(null)
    const { users, dispatch } = useContext(UserContext)

    const handleEdit = async (id) => {
        const response = await axios.patch(`http://localhost:4000/api/users/${id}`, updated)
        dispatch({ type: 'UPDATE_USER', payload: response.data })
        navigate('/profile')
    }

    const handleInput = (e) => {
        setUpdated(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        const auth = localStorage.getItem('auth')
        if (!auth) {
            navigate('/')
        }
    })

    return (
        <div className='w-full min-h-screen flex bg-slate-100'>
            <Sidebar />
            <div className='w-full h-auto flex flex-col'>
                <Header />
                <div className='w-auto h-auto p-10 flex items-center justify-center'>
                    <form action="" className='md:w-96 w-auto flex flex-col mt-2'>
                        <div className='w-auto flex flex-col md:flex-row mb-1'>
                            <input type="text" placeholder='First name' className='border w-full border-slate-200 text-md py-1 px-2 rounded-md outline-8 outline-blue-400 md:mr-2 mr-0' name='fName' defaultValue={users?.fName} onChange={handleInput} />
                            <input type="text" placeholder='Last name' className='w-full mt-1 md:mt-0 border border-slate-200 text-md py-1 px-2 rounded-md outline-8 outline-blue-400' name='lName' defaultValue={users?.lName} onChange={handleInput} />
                        </div>
                        <div className='w-full flex flex-row mb-1'>
                            <input type="email" placeholder='Email' className='w-full border border-slate-200 text-md py-1 px-2 rounded-md outline-8 outline-blue-400 mt-0' name='email' defaultValue={users?.email} onChange={handleInput} />
                        </div>
                        <div className='w-full lex flex-row mb-1'>
                            <input type="text" placeholder='Address' className='w-full border border-slate-200 text-md py-1 px-2 rounded-md outline-8 outline-blue-400 mr-2' name='address' defaultValue={users?.address} onChange={handleInput} />
                        </div>
                        <div className='w-full flex mb-1'>
                            <input type="number" placeholder='Phone no.' className='w-full border border-slate-200 text-md py-1 px-2 rounded-md outline-8 outline-blue-400' name='phone' defaultValue={users?.phone} onChange={handleInput} />
                        </div>
                        <div className='w-full flex flex-col mb-1'>
                            <label htmlFor="birthday">Birthday</label>
                            <input type="date" placeholder='Birthday' className='w-full border border-slate-200 text-md py-1 px-2 rounded-md outline-8 outline-blue-400 mt-1' name='bday' defaultValue={users?.bday.slice(0, 10)} onChange={handleInput} />
                        </div>
                        <div className='w-full flex flex-col py-2'>
                            <input type="button" value="Update" className='bg-yellow-400 text-white py-1 px-2 rounded-md cursor-pointer hover:bg-yellow-500' onClick={() => handleEdit(users?._id)} />
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default EditProfile