import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import User from "../components/User"
const DashboardPage = () => {

    const [users, setUsers] = useState([])
    
    
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users',{
            headers:{
                'Access-Control-Allow-Origin':"*"
            }
        }).then((response)=>{
            return response.json()
        }).then(res => {
            setUsers(res);
        }).catch((error)=>{
            console.log(error);
        });
    }, [])
    

    return (
        <div className="App-header">
            
            <h1>this is a dashboard page</h1>
            {users?.map(user => {
                return(
                    <User key={user.id} id={user.id} {...user} />
                )
            })}
        </div>
    )
}
export {DashboardPage}