import { createContext, useEffect, useState } from "react";



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
          setlogin(boolean);
        }
    }
    const [dataRefresh, setDataRefresh] = useState(true);
    useEffect(() => {
        fetch(
            `http://localhost:8001//api/alldata`
        )
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                }
                throw new Error(response.json());
            })
            .then(res => {
                setData(res)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    

    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
};

export {
    UserContext,
    UserContextProvider
}
