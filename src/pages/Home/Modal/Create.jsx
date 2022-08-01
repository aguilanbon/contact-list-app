import React from 'react'
import { useContext, useState } from 'react'
import ModalContext from '../../../helpers/ModalContext'
import axios from 'axios'

function Create() {

    const { setOpenModalType } = useContext(ModalContext)

    const [createContact, setCreateContact] = useState({
        fName: '',
        lName: '',
        email: '',
        address: '',
        phone: null,
        bday: null,
    })


    const userCreateContact = async () => {
        const response = await fetch('http://localhost:4000/api/contacts', {
            method: 'post',
            body: JSON.stringify(createContact),
            headers: { 'Content-Type': 'application/json' }
        })
        const data = await response.json()
        console.log(data);
    }

    const handleAction = (e) => {
        setCreateContact(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    console.log(createContact);

    return (
        <div className='md:w-1/2 lg:w-1/2 xl:w-1/4 w-full mx-6 h-fit bg-white rounded-lg relative mt-10 '>
            <div className='absolute -mt-1 -right-1' onClick={() => setOpenModalType(null)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-red-500 hover:scale-125 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
            </div>
            <div className='w-full h-auto px-4 py-2 flex-flex-col'>
                <div>
                    <h1>Create New Contact</h1>
                </div>
                <div>
                    <form action="" className='w-full flex flex-col mt-2'>
                        <div className='w-auto flex flex-col md:flex-row mb-1'>
                            <input type="text" placeholder='First name' name='fName' className='border w-full border-slate-200 text-md py-1 px-2 rounded-md outline-8 outline-blue-400 md:mr-2 mr-0' onChange={handleAction} />
                            <input type="text" placeholder='Last name' name='lName' className='w-full mt-1 md:mt-0 border border-slate-200 text-md py-1 px-2 rounded-md outline-8 outline-blue-400' onChange={handleAction} />
                        </div>
                        <div className='w-full flex flex-row mb-1'>
                            <input type="email" placeholder='Email' name='email' className='w-full border border-slate-200 text-md py-1 px-2 rounded-md outline-8 outline-blue-400 mt-0' onChange={handleAction} />
                        </div>
                        <div className='w-full lex flex-row mb-1'>
                            <input type="text" placeholder='Address' name='address' className='w-full border border-slate-200 text-md py-1 px-2 rounded-md outline-8 outline-blue-400 mr-2' onChange={handleAction} />
                        </div>
                        <div className='w-full flex mb-1'>
                            <input type="number" placeholder='Phone no.' name='phone' className='w-full border border-slate-200 text-md py-1 px-2 rounded-md outline-8 outline-blue-400' onChange={handleAction} />
                        </div>
                        <div className='w-full flex flex-col mb-1'>
                            <label htmlFor="birthday">Birthday</label>
                            <input type="date" placeholder='Birthday' name='bday' className='w-full border border-slate-200 text-md py-1 px-2 rounded-md outline-8 outline-blue-400 mt-1' onChange={handleAction} />
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