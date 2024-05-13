import React,{useState} from 'react'
import UserContext from '../context/UserContext'
import ChildComponent from './ChildComponent'
const UseContextDemo = () => {
    const [user, setuser] = useState({
        username:'Ishan',
        email:'ishanp556@gmail.com'
    })
  return (
    <div>
       <UserContext.Provider value={user}>
         <ChildComponent/>
       </UserContext.Provider>
    </div>
  )
}

export default UseContextDemo