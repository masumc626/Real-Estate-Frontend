import { createContext, useState } from "react";



const UserContext = createContext({});

const UserContextProvider = ({ children }) => {

    const [login , setLogin] = useState(true);

    const value = {
        loginStatus : login,
        updateLoginStatus : (boolean)=>{
            setLogin(boolean);
        }
    };

    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
};

export{
    UserContext,
    UserContextProvider
}