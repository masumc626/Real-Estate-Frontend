import { createContext, useEffect, useState } from "react";



const UserContext = createContext({});

const UserContextProvider = ({ children }) => {


    const [login , setLogin] = useState(true);
    const [id , setId] = useState("");
    const [userData, setUserData] = useState("");
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
        },
        {
            _id: 67890,
            image: '',
            property: 'house',
            contact: "1234567890",
            area: 'hyderabad',
            views: 57,
            status: 'sold',
            daysLeft: 45,
        },
        {
            _id: 54321,
            image: '',
            property: 'house',
            contact: "1234567890",
            area: 'hyderabad',
            views: 57,
            status: 'sold',
            daysLeft: 45,
        },
        {
            _id: 123450,
            image: '',
            property: 'house',
            contact: "1234567890",
            area: 'hyderabad',
            views: 57,
            status: 'sold',
            daysLeft: 45,
        },
        {
            _id: 678900,
            image: '',
            property: 'house',
            contact: "1234567890",
            area: 'hyderabad',
            views: 57,
            status: 'sold',
            daysLeft: 45,
        },
        {
            _id: 543210,
            image: '',
            property: 'house',
            contact: "1234567890",
            area: 'hyderabad',
            views: 57,
            status: 'sold',
            daysLeft: 45,
        },
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
