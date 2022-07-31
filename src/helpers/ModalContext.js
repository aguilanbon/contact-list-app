import { useState } from "react";
import { createContext } from "react";

export const ModalContext = createContext(null)

export const ModalProvider = ({children}) => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const value = {
        isModalOpen, setIsModalOpen
    }

    return (
        <ModalContext.Provider value={value}>
            {children}       
        </ModalContext.Provider>
    )
}

export default ModalContext