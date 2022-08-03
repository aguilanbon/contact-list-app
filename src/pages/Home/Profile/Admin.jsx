import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserContext from '../../../helpers/UserContext'
import Header from '../Header'
import Sidebar from '../Sidebar'

function Admin() {

    const { id } = useParams()

    const [currentUser, setCurrentUser] = useState(null)
    const [updatedUser, setUpdatedUser] = useState(null)

    const { dispatch } = useContext(UserContext)

    let navigate = useNavigate()

    const handleEdit = async (id) => {
        const response = await axios.patch(`http://localhost:4000/api/users/${id}`, updatedUser)
        dispatch({ type: 'UPDATE_USER', payload: response.data })
        navigate('/home')
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:4000/api/users/${id}`)
        navigate('/home')
    }

    const handleInput = (e) => {
        setUpdatedUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        const getUser = async () => {
            const response = await axios.get(`http://localhost:4000/api/users/${id}`)
            setCurrentUser(response.data)
        }
        getUser()
    })

    useEffect(() => {
        const auth = localStorage.getItem('auth')
        if (auth !== 'admin') {
            navigate('/home')
        }
    })

    return (
        <div className='w-full min-h-screen flex bg-slate-100' >
            <Sidebar />
            <div className='w-full h-auto flex flex-col'>
                <Header />
                <div className='w-auto h-auto p-6 flex flex-col items-center justify-center'>
                    <h1 className='mb-2'>{currentUser?.role.toUpperCase()}</h1>
                    <form action="" className='md:w-96 w-auto flex flex-col mt-2'>
                        <div className='w-auto flex flex-col md:flex-row mb-1'>
                            <input type="text" placeholder='First name' className='border w-full border-slate-200 text-md py-1 px-2 rounded-md outline-8 outline-blue-400 md:mr-2 mr-0' name='fName' defaultValue={currentUser?.fName} onChange={handleInput} />
                            <input type="text" placeholder='Last name' className='w-full mt-1 md:mt-0 border border-slate-200 text-md py-1 px-2 rounded-md outline-8 outline-blue-400' name='lName' defaultValue={currentUser?.lName} onChange={handleInput} />
                        </div>
                        <div className='w-full flex flex-row mb-1'>
                            <input type="email" placeholder='Email' className='w-full border border-slate-200 text-md py-1 px-2 rounded-md outline-8 outline-blue-400 mt-0' name='email' defaultValue={currentUser?.email} onChange={handleInput} />
                        </div>
                        <div className='w-full lex flex-row mb-1'>
                            <input type="text" placeholder='Address' className='w-full border border-slate-200 text-md py-1 px-2 rounded-md outline-8 outline-blue-400 mr-2' name='address' defaultValue={currentUser?.address} onChange={handleInput} />
                        </div>
                        <div className='w-full flex mb-1'>
                            <input type="number" placeholder='Phone no.' className='w-full border border-slate-200 text-md py-1 px-2 rounded-md outline-8 outline-blue-400' name='phone' defaultValue={currentUser?.phone} onChange={handleInput} />
                        </div>
                        <div className='w-full flex flex-col mb-1'>
                            <label htmlFor="birthday">Birthday</label>
                            <input type="date" placeholder='Birthday' className='w-full border border-slate-200 text-md py-1 px-2 rounded-md outline-8 outline-blue-400 mt-1' name='bday' defaultValue={currentUser?.bday.slice(0, 10)} onChange={handleInput} />
                        </div>

                        <div className='w-full flex flex-col mb-1'>
                            <label htmlFor="birthday">Promote/Demote User</label>
                            <select className='w-full border border-slate-200 text-md py-1 px-2 rounded-md outline-8 outline-blue-400 mt-1' name="role" defaultValue={currentUser?.role} onChange={handleInput}>
                                <option value={currentUser?.role}>Select Role for Promotion/Demotion</option>
                                <option value="user">User</option>
                                <option value="supervisor">Supervisor</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>

                        <div className='w-full flex flex-col py-2'>
                            <input type="button" value="Update" className='bg-yellow-400 text-white py-1 px-2 rounded-md cursor-pointer hover:bg-yellow-500' onClick={() => handleEdit(currentUser?._id)} />
                        </div>
                        <div className='w-full border-t border-x-slate-200'>
                            <h2>Other Options</h2>
                        </div>

                        <div className='w-auto flex  py-2'>
                            <input type="button" value="Delete User" className='bg-red-400 text-white py-1 px-2 rounded-md cursor-pointer hover:bg-red-500' onClick={() => handleDelete(currentUser?._id)} />
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Admin