import { useAuth } from "../hooks/Auth";
import { createContext, useContext } from "react";

const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const auth = useAuth()

    return <AuthContext.Provider value={auth}>
        {children}
    </AuthContext.Provider>
}

const useAuthContext = () => useContext(AuthContext)

export { useAuthContext, AuthProvider}