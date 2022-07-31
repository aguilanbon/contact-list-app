import React from 'react'
import Create from './Create'

function Overlay() {
    return (
        <div className='w-full min-h-screen bg-black bg-opacity-70 fixed z-10 flex items-start justify-center'>
            <Create />
        </div>
    )
}

export default Overlay