import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const isToken = localStorage.getItem("token") ? true : false;

    const [user,setUser] = useState({isLogged: isToken , tokenVal:localStorage.getItem("token") });

    return (
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);