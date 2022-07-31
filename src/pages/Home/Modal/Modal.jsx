import React from 'react'
import Overlay from './Overlay'

function Modal() {
    return (
        <div className='w-full h-auto fixed z-10'>
            <Overlay />
        </div>
    )
}

export default Modal