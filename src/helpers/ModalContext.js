import { useState } from "react";
import { createContext } from "react";

export const ModalContext = createContext(null)

export const ModalProvider = ({children}) => {

    const [openModalType, setOpenModalType] = useState(null)

    const value = {
        openModalType, setOpenModalType
    }

    return (
        <ModalContext.Provider value={value}>
            {children}       
        </ModalContext.Provider>
    )
}

export default ModalContext