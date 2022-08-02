import { useReducer } from "react";
import { createContext } from "react";

export const ContactContext = createContext()

export const contactsReducer = (state, action) => {
    switch(action.type) {
        case 'SET_CONTACTS':
            return {
                contacts: action.payload
            }
        case 'CREATE_CONTACT':
            return {
                contacts: [action.payload, ...state.contacts]
            }
        default: 
            return state
    }
}

export const ContactsProvider = ({children}) => {

    const [state, dispatch] = useReducer(contactsReducer, {contacts: null})

    return (
        <ContactContext.Provider value={{...state, dispatch}}>
            {children}       
        </ContactContext.Provider>
    )
}

export default ContactContext