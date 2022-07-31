import React from 'react'

function Directory() {
    return (
        <div className='w-full h-auto flex p-6'>
            <div className='w-full h-auto '>
                <div className='w-full flex items-center static'>
                    <input type="text" name="search" id="" className='w-full border-b border-cyan-800 outline-none bg-inherit pl-10 py-1' />
                    <div className='fixed'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className='fixed right-8 flex h-full items-center justify-center'>
                        <button className='py-1 px-2 text-white text-xs rounded-full bg-cyan-600 hover:bg-cyan-700'>Search</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Directory