import { createContext, useState } from "react";



const UserContext = createContext({});

const UserContextProvider = ({ children }) => {

    const [login , setLogin] = useState(true);
    const [id , setId] = useState("");
    const [userData, setUserData] = useState("");

    const value = {
        loginStatus : login,
        id : id,
        updateId : (id) =>{
            setId(id);
        },
        userData: userData,
        updateUserData: (data) => {
            setUserData(data);
        },
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