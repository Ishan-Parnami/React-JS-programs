import React from 'react'
import UserContext from '../context/UserContext'
const ChildComponent = () => {
    const user = React.useContext(UserContext)
  return (
    <div>
       <h1>Context API: useContext Demo</h1>
       <h2>Name:{user.username}</h2>
       <h2>Email:{user.email}</h2>
    </div>
  )
}

export default ChildComponent