import axios from 'axios'
import React from 'react'
import { useContext, useState } from 'react'
import ContactContext from '../../../helpers/ContactContext'
import ModalContext from '../../../helpers/ModalContext'

function Create() {

    const { setOpenModalType } = useContext(ModalContext)
    const { dispatch } = useContext(ContactContext)
    const userId = localStorage.getItem('uId')

    const [createContact, setCreateContact] = useState({
        fName: '',
        lName: '',
        email: '',
        address: '',
        phone: null,
        bday: null,
        uId: userId
    })

    const [errorMsgs, setErrorMsgs] = useState('')

    const userCreateContact = async () => {
        try {
            const response = await axios.post('http://localhost:4000/api/contacts', createContact)
            dispatch({ type: 'CREATE_CONTACT', payload: response.data })
            setOpenModalType(null)
        } catch (error) {
            setErrorMsgs(error.response.data.mssg);
        }
    }

    const handleInput = (e) => {
        setCreateContact(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <div className='md:w-1/2 lg:w-1/2 xl:w-1/4 w-full mx-6 h-fit bg-white rounded-lg relative mt-10 '>
            <div className='absolute -mt-1 -right-1' onClick={() => setOpenModalType(null)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-red-500 hover:scale-125 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
            </div>
            <div className='w-full h-auto px-4 py-2 flex-flex-col'>
                <div className='flex items-center flex-col'>
                    <h1>Create New Contact</h1>
                    {errorMsgs && <p className='text-xs text-red-500'>{errorMsgs}</p>}
                </div>
                <div>
                    <form action="" className='w-full flex flex-col mt-2'>
                        <div className='w-auto flex flex-col md:flex-row mb-1'>
                            <div className='flex flex-col w-full items-center md:pl-1'>
                                <input type="text" placeholder='First name' name='fName' className='border w-full border-slate-200 text-md py-1 px-2 rounded-md outline-8 outline-blue-400 md:mr-4 mr-2 ml-2' onChange={handleInput} />
                                <p className='text-xs text-red-400'>{errorMsgs.fName}</p>
                            </div>
                            <div className='flex flex-col w-full items-center'>
                                <input type="text" placeholder='Last name' name='lName' className='w-full mt-1 md:mt-0 border border-slate-200 text-md py-1 px-2 rounded-md outline-8 outline-blue-400 ml-0' onChange={handleInput} />
                                <p className='text-xs text-red-400'>{errorMsgs.lName}</p>
                            </div>
                        </div>
                        <div className='w-full flex flex-col mb-1'>
                            <input type="email" placeholder='Email' name='email' className='w-full border border-slate-200 text-md py-1 px-2 rounded-md outline-8 outline-blue-400 mt-0' onChange={handleInput} />
                            <p className='text-xs text-red-400'>{errorMsgs.email}</p>

                        </div>
                        <div className='w-full flex items-center flex-col mb-1'>
                            <input type="text" placeholder='Address' name='address' className='w-full border border-slate-200 text-md py-1 px-2 rounded-md outline-8 outline-blue-400 mr-2' onChange={handleInput} />
                            <p className='text-xs text-red-400'>{errorMsgs.address}</p>
                        </div>
                        <div className='w-full flex items-center flex-col mb-1'>
                            <input type="number" placeholder='Phone no.' name='phone' className='w-full border border-slate-200 text-md py-1 px-2 rounded-md outline-8 outline-blue-400' onChange={handleInput} />
                            <p className='text-xs text-red-400'>{errorMsgs.phone}</p>

                        </div>
                        <div className='w-full flex flex-col mb-1'>
                            <label htmlFor="birthday">Birthday</label>
                            <input type="date" placeholder='Birthday' name='bday' className='w-full border border-slate-200 text-md py-1 px-2 rounded-md outline-8 outline-blue-400 mt-1' onChange={handleInput} />
                        </div>
                        <div className='w-full flex flex-col py-2'>
                            <input type="button" value="Add" className='bg-green-400 text-white py-1 px-2 rounded-md cursor-pointer hover:bg-green-500' onClick={() => userCreateContact()} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create