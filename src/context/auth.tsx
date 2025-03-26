import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext<{user : string | null; setUser?:any}>({user : null});

export const AuthProvider = ({children} : {children : React.ReactNode}) => {
    const [user, setUser] = useState<string |null>(localStorage.getItem("user") || 'uedser')
    return(
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
};


export const useAuth = () => {
    return useContext(AuthContext);
};
