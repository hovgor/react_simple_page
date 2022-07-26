import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UserPage() {
   const { id } = useParams();

   const [userParam, setUserParam]  = useState({})
    console.log(userParam);

   useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((response)=>{
        return response.json();
    }).then((response)=>{
        setUserParam(response);
    })
    .catch((error)=>{console.log(error);})
   },[])

    return (
    <>
    <div className='App-header'>
        <p><span>Name: </span>{userParam.name}</p>
        <p><span>Email: </span>{userParam.email}</p>
        <p><span>City: </span>{userParam.address.city}</p>
    </div>
    
    </>
  )
}

export default UserPage