import React from 'react'
import { useContext } from 'react'
import ModalContext from '../../../helpers/ModalContext'
import Create from './Create'
import Edit from './Edit'

function Overlay() {

    const { openModalType } = useContext(ModalContext)

    return (
        <div className='w-full min-h-screen bg-black bg-opacity-70 fixed z-10 flex items-start justify-center'>
            {openModalType === 'create' && <Create />}
            {openModalType === 'edit' && <Edit />}
        </div>
    )
}

export default Overlay