import React from 'react'

function Create() {
    return (
        <div className='w-1/2 h-3/4 bg-white rounded-lg relative'>
            <div className='absolute -mt-1 -right-1'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-red-500 hover:scale-125 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
            </div>
            <div className='w-full h-auto px-4 py-2 flex-flex-col'>
                <div>
                    <h1>Create New Contact</h1>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default Create