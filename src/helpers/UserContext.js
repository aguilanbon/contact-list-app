import { useReducer } from "react";
import { createContext } from "react";

export const UserContext = createContext()

export const userReducer = (state, action) => {
    switch(action.type) {
        case 'SET_USER':
            return {
                users: action.payload
            }
        case 'CREATE_CONTACT':
            return {
                users: [action.payload, ...state.users]
            }
        case 'UPDATE_USER':
            return {
                users: state.users._id === action.payload._id ? {...action.payload} : state.users
            }
        default: 
            return state
    }
}

export const UserProvider = ({children}) => {

    const [state, dispatch] = useReducer(userReducer, {users: null})

    return (
        <UserContext.Provider value={{...state, dispatch}}>
            {children}       
        </UserContext.Provider>
    )
}

export default UserContext