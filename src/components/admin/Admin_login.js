import React, { useState } from 'react'
import '../styles/login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Admin_login() {

  const [admin, setAdmin] = useState({
    username: "",
    password: ""

  })


  const handleChange = e => {
    const { name, value } = e.target
    setAdmin({
      ...admin,
      [name]: value
    })
  }
  let navigate = useNavigate()

  const login = async (e) => {
    const { username, password } = admin
    e.preventDefault()
    if(username=="admin"){
    const res = await axios.post("http://localhost:4000/login", admin)
    .then(res=> alert(res.data.message))
    navigate("/dashboard")
    }
   
    else{
      alert("only admin can login")
    }
  }
  return (
    <div className='container' style={{backgroundColor:"red"}}>
      <div className='login'>
      {console.log("USER", admin)}
      <h2>ADMIN</h2>
      <input type="text" name="username" value={admin.username} placeholder=' username' onChange={handleChange} required></input> <br></br>
      <input type="password" name="password" value={admin.password} placeholder='password' onChange={handleChange} required></input> <br></br>
      <div className='button' onClick={login} >Login</div>

    </div>

    </div>
    
  )
}

export default Admin_login