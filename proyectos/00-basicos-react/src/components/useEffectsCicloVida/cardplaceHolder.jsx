import { useEffect, useState } from "react";

const CardPlaceHolder=()=>{
    const [users, setUsers]=useState([]);
    const fetchdataPlaceHolder=async()=>{
        try{
            const response=await fetch("https://jsonplaceholder.typicode.com/users")
            setUsers(await response.json());
        return await response.json();
        }catch(error){
            console.log("Error",error);
        }
        
    }
    useEffect(()=>{
        setUsers(fetchdataPlaceHolder());
        console.log("users")
    },[]);

    return (
        <div className="bg-gray-200 shadow-lg flex-col justify-center">
            {users.map((user, index) => (
                <div key={index} className="flex justify-center items-center bg-gray-300 h-48 w-full">
                    <h2 className="text-xl font-bold mb-2">
                        User name: {user.name}
                    </h2>
                    <p className="text-gray-600 mb-4">City: {user.address.city}</p>
                </div>
            ))}
        </div>
    );


}
export default CardPlaceHolder;