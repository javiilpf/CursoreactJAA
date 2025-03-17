import { createContext, useState } from "react";



export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [isAuthenticated, setisAuthenticated] = useState(() => {
        const token = localStorage.getItem('token');
        return token ? true : false;
    })

    const [token, setToken] = useState(() => {
        const token = localStorage.getItem('token');
        return token ? token : null;
    })

    const [user, setUser] = useState(() => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    })

    const login = (token, user) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        setisAuthenticated(true);
        setToken(token);
        setUser(user);
    }

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setisAuthenticated(false);
        setToken(null);
        setUser(null);
    }
    
    

    return (
        <AuthContext.Provider value={{isAuthenticated, token, user, login, logout, register}}>
            {children}
        </AuthContext.Provider>
    )
}
