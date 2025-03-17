import { createContext, useState } from "react";

export const AuthContext = createContext(null);
const url=import.meta.env.VITE_API_URL


export const AuthProvider = ({ children }) => {
   
    const [events, setevents] = useState([])

    const fetchEvents=async()=>{
        
    }
    

    
    return (
        <AuthProvider.Provider value={{}}>{children}</AuthProvider.Provider>
    )
};