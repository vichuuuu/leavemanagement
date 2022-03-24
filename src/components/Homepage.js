import React from 'react'
import '../styles/homepage.css'
import { useNavigate } from 'react-router-dom'

function Homepage() {

    let navigate = useNavigate()
  return (


    <div className='box1'>
        <h2>Leave Management System</h2>
        <div className='box2'>
         <button id='btn1'
          onClick={() => {
             navigate("/admin_login")}}>Admin</button>
         <button id='btn2'
          onClick={() => {
             navigate("/emp_login")}}>Employee</button>
        </div>
    </div>
  )
}

export default Homepage