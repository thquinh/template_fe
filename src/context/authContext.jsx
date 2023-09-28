import React from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext({
    user: null,
    signIn: () => { },
    signOut: () => { },
});

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signIn = (email, password) => {
        setUser({})
    }

    const signOut = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}