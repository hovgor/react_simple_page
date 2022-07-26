import React from 'react'
import { Link } from 'react-router-dom'

function User(props) {
  const {id,name} = props
  return (
    <div>
        <Link to={`/users/${id}`}>{name}</Link>
    </div>
  )
}

export default User