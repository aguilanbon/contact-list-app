import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import ContactContext from '../../../helpers/ContactContext'
import ModalContext from '../../../helpers/ModalContext'
import toast from 'react-hot-toast'

function Edit() {

    const { setOpenModalType, currentContactId } = useContext(ModalContext)
    const { dispatch } = useContext(ContactContext)

    const [currentContactDetails, setCurrentContactDetails] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleEdit = async (id) => {
        setIsLoading(true)
        const response = await axios.patch(`http://localhost:4000/api/contacts/${id}`, currentContactDetails)
        dispatch({ type: 'UPDATE_CONTACT', payload: response.data })
        setOpenModalType(null)
        toast.success('Contact updated!')
    }

    const handleInput = (e) => {
        setCurrentContactDetails(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    // const handleImage = (e) => {
    //     setCurrentContactDetails(prev => ({ ...prev, contactImage: e.target.files[0] }))
    // }

    useEffect(() => {
        const findContact = async () => {
            const response = await fetch(`http://localhost:4000/api/contacts/single/${currentContactId}`)
            const data = await response.json()
            setCurrentContactDetails(data)
        }
        findContact()
    }, [currentContactId])

    return (
        <div className='md:w-1/2 lg:w-1/2 xl:w-1/4 w-full mx-6 h-fit bg-white rounded-lg relative mt-10 '>
            <div className='absolute -mt-1 -right-1' onClick={() => setOpenModalType(null)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-red-500 hover:scale-125 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
            </div>
            <div className='w-full h-auto px-4 py-2 flex-flex-col'>
                <div>
                    <h1>Edit Contact</h1>
                </div>
                <div>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        handleEdit(currentContactDetails._id)
                    }} action="" encType='multipart/form-data' className='w-full flex flex-col mt-2'>
                        {/* <input type="file" name="contactImage" onChange={handleImage} className='bg-slate-200' id="" /> */}
                        <div className='w-auto flex flex-col md:flex-row mb-1'>
                            <input type="text" placeholder='First name' className='border w-full border-slate-200 text-md py-1 px-2 rounded-md outline-8 outline-blue-400 md:mr-2 mr-0' name='fName' defaultValue={currentContactDetails?.fName} onChange={handleInput} />
                            <input type="text" placeholder='Last name' className='w-full mt-1 md:mt-0 border border-slate-200 text-md py-1 px-2 rounded-md outline-8 outline-blue-400' name='lName' defaultValue={currentContactDetails?.lName} onChange={handleInput} />
                        </div>
                        <div className='w-full flex flex-row mb-1'>
                            <input type="email" placeholder='Email' className='w-full border border-slate-200 text-md py-1 px-2 rounded-md outline-8 outline-blue-400 mt-0' name='email' defaultValue={currentContactDetails?.email} onChange={handleInput} />
                        </div>
                        <div className='w-full lex flex-row mb-1'>
                            <input type="text" placeholder='Address' className='w-full border border-slate-200 text-md py-1 px-2 rounded-md outline-8 outline-blue-400 mr-2' name='address' defaultValue={currentContactDetails?.address} onChange={handleInput} />
                        </div>
                        <div className='w-full flex mb-1'>
                            <input type="number" placeholder='Phone no.' className='w-full border border-slate-200 text-md py-1 px-2 rounded-md outline-8 outline-blue-400' name='phone' defaultValue={currentContactDetails?.phone} onChange={handleInput} />
                        </div>
                        <div className='w-full flex flex-col mb-1'>
                            <label htmlFor="birthday">Birthday</label>
                            <input type="date" placeholder='Birthday' className='w-full border border-slate-200 text-md py-1 px-2 rounded-md outline-8 outline-blue-400 mt-1' name='bday' defaultValue={currentContactDetails?.bday?.slice(0, 10)} onChange={handleInput} />
                        </div>
                        <div className='w-full flex flex-col py-2'>
                            <input type="submit" value={isLoading ? `Updating` : 'Update'} className='bg-yellow-400 text-white py-1 px-2 rounded-md cursor-pointer hover:bg-yellow-500' />
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Edit