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

    const { users, dispatch } = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)

    const handleEdit = async (id) => {
        setIsLoading(true)

        const formData = new FormData()

        formData.append('fName', currentUser.fName)
        formData.append('lName', currentUser.lName)
        formData.append('address', currentUser.address)
        formData.append('phone', currentUser.phone)
        formData.append('bday', currentUser.bday)
        formData.append('email', currentUser.email)
        formData.append('userImage', currentUser.userImage)

        const response = await axios.patch(`http://localhost:4000/api/users/${id}`, formData)
        dispatch({ type: 'UPDATE_USER', payload: response.data })
        navigate('/profile')
    }

    const handleInput = (e) => {
        setCurrentUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleImage = (e) => {
        setCurrentUser(prev => ({ ...prev, userImage: e.target.files[0] }))
    }

    useEffect(() => {
        setCurrentUser(users)
        const auth = localStorage.getItem('auth')
        if (!auth) {
            navigate('/')
        }
    }, [navigate, users])

    return (
        <div className='w-full min-h-screen flex bg-slate-100'>
            <Sidebar />
            <div className='w-full h-auto flex flex-col'>
                <Header />
                <div className='w-auto h-auto p-10 flex items-center justify-center'>
                    <form  onSubmit={(e) => {
                        e.preventDefault()
                        handleEdit(users?._id)
                    }} action="" className='md:w-96 w-auto flex flex-col mt-2' encType='multipart/form-data'>
                        <div className='w-auto'>
                            <input type="file" name="userImage" onChange={handleImage}  className='w-full bg-slate-150 mb-1 rounded-sm' id="" />
                        </div>
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
                            <input type="submit" value={isLoading ? `Updating profile` : `update`} className='bg-yellow-400 text-white py-1 px-2 rounded-md cursor-pointer hover:bg-yellow-500' />
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default EditProfile