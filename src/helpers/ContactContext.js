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
                contacts: [action.payload, {...state.contacts}]
            }
        case 'DELETE_CONTACT':
            return {
                contacts: state.contacts.filter((c) => c._id !== action.payload._id)
            }
        case 'UPDATE_CONTACT': 
            return {
                contacts: state.contacts.map((c) => c._id === action.payload._id ? {...action.payload} : c)
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