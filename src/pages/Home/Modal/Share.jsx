import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import ModalContext from '../../../helpers/ModalContext'
import UserContext from '../../../helpers/UserContext'
import toast from 'react-hot-toast'

function Share() {

    const { setOpenModalType, currentContactId, friends } = useContext(ModalContext)
    const { dispatch } = useContext(UserContext)

    const handleShare = async (id) => {
        try {
            const cId = { cId: currentContactId }
            const response = await axios.patch(`http://localhost:4000/api/users/share/${id}`, cId)
            dispatch({ type: 'UPDATE_USER', payload: response.data })
            setOpenModalType(null)
            toast('Contact sent to recepient', {
                icon: '📨'
            })
        } catch (error) {
            console.log(error);
            toast.error('User already has that contact')
        }
    }

    return (
        <div className='md:w-1/2 lg:w-1/2 xl:w-1/4 w-full mx-6 h-fit bg-white rounded-lg relative mt-10 '>
            <div className='absolute -mt-1 -right-1' onClick={() => setOpenModalType(null)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-red-500 hover:scale-125 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
            </div>
            <div className='max-w-96 h-auto px-4 py-2 flex-flex-col'>
                <h1 className='font-bold mb-2'>Share Contact to:</h1>
                {friends?.map((friend, index) => (
                    <div className='w-auto flex' key={index} onClick={() => handleShare(friend._id)}>
                        <div className='w-full flex flex-col p-2 cursor-pointer border border-slate-200 mb-1 shadow-md rounded-md hover:bg-blue-500 hover:bg-opacity-10 hover:scale-x-105'>
                            <h3>{friend.fName} {friend.lName}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Share