import React, { createContext, useState } from 'react'
export const UserContext = createContext()
const UserContextProvider = (props) => {
    const [userType, setUserType] = useState()
    const URL = "http://localhost:5000"
    return (
        <UserContext.Provider
            value={
                {
                    userType,
                    URL
                }
            }>
                {props.children}
            </UserContext.Provider>
    )
}
export default UserContextProvider;