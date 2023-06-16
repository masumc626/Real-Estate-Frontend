import { createContext, useEffect, useState } from "react";



const UserContext = createContext({});

const UserContextProvider = ({ children }) => {


    const [login , setLogin] = useState(false);
    const [id , setId] = useState("noId");
    const [userData, setUserData] = useState({
        _id: "132455",
        userId: "Unkown"
    });
    console.log(id);
    const [dataRefresh, setDataRefresh] = useState(true);
    const [data,setData]=useState([
        {
            _id: 12345,
            image: '',
            property: 'house',
            contact: "1234567890",
            area: 'hyderabad',
            views: 57,
            status: 'sold',
            daysLeft: 45,
        }
    
    ]);

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
        },
        data : data,
        updateData : (newData) => {
            setData(newData);
        },
        dataRefresh : dataRefresh,
        updateDataRefresh : ()=>{
            setDataRefresh(!dataRefresh)
        }
    }
    // useEffect(() => {
    //     fetch(
    //         `https://real-estate-backend-g14x.onrender.com/property/api/alldata`
    //     )
    //         .then(response => {
    //             if (response.status === 200) {
    //                 return response.json();
    //             }
    //             throw new Error(response.json());
    //         })
    //         .then(res => {
    //             setData(res)
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }, [dataRefresh])

    

    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
};

export {
    UserContext,
    UserContextProvider
}
