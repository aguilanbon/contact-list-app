import React from 'react'
import { useContext } from 'react'
import { ModalContext } from '../../../helpers/ModalContext'
import Header from '../Header'
import Modal from '../Modal/Modal'
import Sidebar from '../Sidebar'
import ContactsCard from './ContactsCard'

function Profile() {

    const { openModalType, setOpenModalType } = useContext(ModalContext)

    return (
        <div className='w-full min-h-screen flex bg-slate-100'>
            {openModalType && <Modal />}
            <Sidebar />
            <div className='w-full h-auto flex flex-col'>
                <Header />
                <div className='w-full h-auto flex md:p-6 p-4'>
                    <div className='w-full h-auto flex lg:flex-row flex-col'>
                        <div className='md:w-full h-auto lg:w-1/4 w-full flex flex-col md:flex-row lg:flex-col items-center md:mb-6'>
                            <div className='w-full h-full border border-slate-200 rounded-lg py-4 px-8 shadow-md'>
                                <div className='flex items-center justify-center'>
                                    <img src="./profile.png" alt="" className='w-20 md:w-28' />
                                </div>
                                <div className='w-full flex flex-col items-center mt-2 md:px-10'>
                                    <div className='flex flex-col items-center'>
                                        <h2 className='text-md md:text-lg text-cyan-700 font-bold'>Bon Aguilan</h2>
                                        <h1 className='text-sm md:text-md text-slate-700'>Jr. Software Engineer</h1>
                                        <h2 className='text-sm md:text-md text-slate-600 opacity-70'>aguilanbon@gmail.com</h2>
                                        <h2 className='text-sm md:text-md text-slate-600 opacity-70'>+63995-651-0890</h2>
                                        <div className='flex mt-4'>
                                            <button className=' text-xs flex items-center text-blue-400 justify-center border border-blue-200 py-1 px-2 rounded-md hover:text-white hover:bg-blue-500 transition-all duration-300'>
                                                Edit Profile
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='w-full h-full flex flex-col lg:mt-4 sm:mt-4 md:mt-0 mt-4 md:ml-4 lg:ml-2 ml-2'>
                                <div className='w-full'>
                                    <h2 className='font-2xl font-bold'>Additional Information</h2>
                                </div>
                                <div className='flex flex-col mt-1'>
                                    <div className='mb-2'>
                                        <h1 className='text-xs md:text-md font-semibold text-slate-400'>Gender</h1>
                                        <h2 className='text-sm md:text-md'>Male</h2>
                                    </div>
                                    <div className='mb-2'>
                                        <h1 className='text-xs md:text-md font-semibold text-slate-400'>Age</h1>
                                        <h2 className='text-sm md:text-md'>26</h2>
                                    </div>
                                    <div className='mb-2'>
                                        <h1 className='text-xs md:text-md font-semibold text-slate-400'>Birthday</h1>
                                        <h2 className='text-sm md:text-md'>October 1, 1995</h2>
                                    </div>
                                    <div className='mb-2'>
                                        <h1 className='text-xs md:text-md font-semibold text-slate-400'>Address</h1>
                                        <h2 className='text-sm md:text-md'>Camias st., Narra, Palawan</h2>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='lg:w-3/4 w-full h-fit lg:ml-6 md:ml-0 md:mt-0 mt-4 border-x border-b border-slate-200 flex-flex-col rounded-lg'>
                            <div className='w-full flex items-center justify-between bg-slate-800 rounded-t-lg'>
                                <div className='w-full py-2 px-4 flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <h1 className='text-cyan-600 ml-4 md:text-sm text-xs w-full'>My Contacts</h1>
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
                                <ContactsCard />
                                <ContactsCard />
                                <ContactsCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile