import React, { useState } from 'react'
import '../styles/login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Employee_login() {

    const [user, setUser] = useState({
        username: "",
        password: ""

    })


    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    let navigate = useNavigate()

    const login = async (e) => {
        const { username, password } = user
        e.preventDefault()

        const res = await axios.post("http://localhost:4000/login", user)
        alert(res.data.message)
        


        navigate("/empdashboard")
    }
    return (
        <div className='container'>

            <div className='login'>
                {console.log("USER", user)}
                <h2>LOGIN</h2>
                <input type="text" name="username" value={user.username} placeholder=' username' onChange={handleChange} required></input> <br></br>
                <input type="password" name="password" value={user.password} placeholder='password' onChange={handleChange} required></input> <br></br>
                <div className='button' onClick={login} >Login</div>

            </div>
        </div>

    )
}

export default Employee_login