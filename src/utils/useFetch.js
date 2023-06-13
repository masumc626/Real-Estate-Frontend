import { useEffect, useState } from "react";




export default function useFetchGet(intialData,path){

    const [data, setData] = useState(intialData);
    let pathVar = "";
    if(path) pathVar = path;

    useEffect(() => {
        fetch(
            `http://localhost:8001//api/alldata`
            )
            .then(response => {
                if(response.status === 200){
                    return response.json();
                }
                throw new Error(response.json());
            }) 
            .then(res => {
                data = res;
            })
            .catch((err) => {
                console.log(err);
            })
    });

    return [data]

}