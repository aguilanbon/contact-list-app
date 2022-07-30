import { useState } from "react";
import { createContext } from "react";

export const SignUpContext = createContext(null)

export const SignUpProvider = ({children}) => {

    const [signUpStep, setSignUpStep] = useState(1)

    const value = {
        signUpStep, setSignUpStep
    }

    return (
        <SignUpContext.Provider value={value}>
            {children}       
        </SignUpContext.Provider>
    )
}

export default SignUpContext