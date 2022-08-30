import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ContactContext from '../../../helpers/ContactContext'
import { ModalContext } from '../../../helpers/ModalContext'
import UserContext from '../../../helpers/UserContext'
import Header from '../Header'
import Modal from '../Modal/Modal'
import Sidebar from '../Sidebar'
import ContactsCard from './ContactsCard'
import EditProfile from './EditProfile'
import FriendCard from './FriendCard'
import toast from 'react-hot-toast'

function Profile() {

    const { openModalType, setOpenModalType, friends, setFriends } = useContext(ModalContext)
    const { contacts, dispatch: altDispatch } = useContext(ContactContext)
    const { users, dispatch } = useContext(UserContext)

    let navigate = useNavigate()

    const uid = localStorage.getItem('uId')

    const handleDecline = async (id) => {
        const reqId = { reqId: localStorage.getItem('uId') }
        const response = await axios.patch(`http://localhost:4000/api/users/frd/${id}`, reqId)
        dispatch({ type: 'UPDATE_USER', payload: response.data })
        toast('whyyyyyy???', {
            icon: '😭'
        })
    }

    const handleAccept = async (id) => {
        const reqId = { reqId: localStorage.getItem('uId') }
        const response = await axios.patch(`http://localhost:4000/api/users/fra/${id}`, reqId)
        dispatch({ type: 'UPDATE_USER', payload: response.data })
        toast('yay! new friend', {
            icon: '👥'
        })
    }

    useEffect(() => {
        const auth = localStorage.getItem('auth')
        if (!auth) {
            navigate('/')
        }
    }, [navigate])

    useEffect(() => {
        const getUser = async (id) => {
            const response = await axios.get(`http://localhost:4000/api/users/${id}`)
            dispatch({ type: 'SET_USER', payload: response.data })
            altDispatch({ type: 'SET_CONTACTS', payload: response.data.contacts })
            setFriends(response.data.friends)
        }
        getUser(uid)
    }, [altDispatch, dispatch, setFriends, uid, users])

    return (
        <div className='w-full min-h-screen flex bg-slate-100'>
            {openModalType && <Modal />}
            <Sidebar />
            <div className='w-full h-auto flex flex-col'>
                <Header />
                <div className='w-full h-auto flex md:p-6 p-4'>
                    <div className='w-full h-auto flex lg:flex-row flex-col'>
                        <div className='md:w-full h-auto lg:w-1/4 w-full flex flex-col md:flex-row lg:flex-col items-center md:mb-6'>
                            <div className='w-full h-full border border-slate-200 bg-white rounded-md  shadow-md pb-4'>
                                <div className='flex items-center justify-center py-4 px-8'>
                                    <img src={users?.userImage === 'avatar' ? `http://localhost:4000/uploads/profile.png` : `http://localhost:4000/uploads/users/${users?.userImage}`} alt="" className='w-20 md:w-28 h-20 md:h-28 rounded-full object-cover' />
                                </div>
                                <div className='w-full flex flex-col items-center mt-2 md:px-4 px-0'>
                                    <div className='flex flex-col items-center'>
                                        <h2 className='text-md md:text-lg text-cyan-700 font-bold'>{users?.fName} {users?.lName}</h2>
                                        <h1 className={`text-sm md:text-md 
                                            ${users?.role === 'user' && 'text-blue-600'}
                                            ${users?.role === 'supervisor' && 'text-green-600'}
                                            ${users?.role === 'admin' && 'text-orange-600'}
                                        `}>{users?.role}</h1>
                                        <h2 className='text-sm md:text-md text-slate-600 opacity-70'>{users?.email}</h2>
                                        <h2 className='text-sm md:text-md text-slate-600 opacity-70'>{users?.phone}</h2>
                                        <div className='flex mt-4'>
                                            <Link to='/profile/edit' element={<EditProfile />}>
                                                <button className=' text-xs flex items-center text-blue-400 justify-center border border-blue-200 py-1 px-2 rounded-md hover:text-white hover:bg-blue-500 transition-all duration-300'>
                                                    Edit Profile
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='w-full h-full flex flex-col mt-4 px-4 md:px-0'>
                                        <div className='w-full mb-2 border-b border-slate-200'>
                                        </div>
                                        <div className='flex flex-col mt-1 ml-3'>
                                            <div className='mb-2'>
                                                <h1 className='text-xs md:text-md font-semibold text-slate-400'>Birthday</h1>
                                                <h2 className='text-sm md:text-md'>{users?.bday.slice(0, 10)}</h2>
                                            </div>
                                            <div className='mb-2'>
                                                <h1 className='text-xs md:text-md font-semibold text-slate-400'>Address</h1>
                                                <h2 className='text-sm md:text-md'>{users?.address}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex flex-col lg:w-3/4 h-fit'>
                            <div className='flex flex-col w-full h-fit mb-4'>
                                <div className='h-fit lg:ml-5 md:ml-0 md:mt-0 mt-4 border-x border-b border-slate-200 flex-flex-col rounded-lg'>
                                    <div className='w-full flex items-center justify-between bg-slate-800 rounded-t-md'>
                                        <div className='w-full py-2 px-4 flex items-center'>
                                            <h1 className='text-cyan-600 md:text-sm text-xs w-full'>Friends</h1>
                                        </div>
                                    </div>
                                    <div className='overflow-y-scroll max-h-96'>
                                        {friends?.map((friend, index) => (
                                            <FriendCard friend={friend} key={index} />
                                        ))}

                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col w-full h-fit'>
                                <div className='h-fit lg:ml-5 md:ml-0 md:mt-0 mt-4 border-x border-b border-slate-200 flex-flex-col rounded-lg'>
                                    <div className='w-full flex items-center justify-between bg-slate-800 rounded-t-md'>
                                        <div className='w-full py-2 px-4 flex items-center'>
                                            <h1 className='text-cyan-600 md:text-sm text-xs w-full'>Contacts</h1>
                                        </div>
                                        <div className='flex justify-end w-full pr-4'>
                                            <button className='p-2 text-green-400 text-sm flex items-center hover:bg-slate-700 rounded-full' onClick={() => setOpenModalType('create')}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='overflow-y-scroll max-h-96'>
                                        {contacts?.map((contact, index) => (
                                            <ContactsCard key={index} contact={contact} />
                                        ))}
                                    </div>
                                </div>
                                {users?.requests &&
                                    <div className='w-auto h-fit lg:ml-5 md:ml-0 md:mt-0 mt-4 flex-flex-col rounded-lg mr-4'>
                                        {
                                            users.requests.map((rq, index) => (
                                                <div className='w-auto flex mt-4' key={index}>
                                                    <div className='flex p-2 border border-slate-200 bg-white rounded-md items-center'>
                                                        <div className='flex'>
                                                            <p className='text-xs'><strong>{rq.fName} {rq.lName}</strong> sent you a friend request</p>
                                                        </div>
                                                        <div className='flex text-white ml-2'>
                                                            <button className='text-xs rounded-md bg-green-400 p-1 mr-2' onClick={() => handleAccept(rq._id)}>Accept</button>
                                                            <button className='text-xs rounded-md bg-red-400 p-1' onClick={() => handleDecline(rq._id)}>Decline</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile