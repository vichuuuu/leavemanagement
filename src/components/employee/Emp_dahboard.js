import React from 'react'
import '../employee/emp_dashboard.css'
import { useNavigate } from 'react-router-dom'

function Emp_dahboard() {
  let navigate=useNavigate()
  return (
    <div>

<nav class="navbar navbar-expand-lg navbar-light  ">
        <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-between", flex: 1 }}>
          <a class="navbar-brand text-light" href="#">Leave Management</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-light" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-light" href="#">Dashboard</a>
              </li>

            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>People</title><path d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z" fill="none" stroke="currentColor" stroke-miterlimit="3" stroke-width="32"/><path d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/></svg>
            <h6>Employee panel</h6>
            <button class="btn btn-outline-light text-light" type="submit" onClick={()=>{navigate("/")}}>Logout</button>

          </div>
        </div>
      </nav>


      <div className='sidebar1'>
        <h4 id="menu">MENU</h4>
        <button className='button1' onClick={()=>{navigate("/empview")}}> VIEW</button>
        <button className='button2' onClick={()=>{navigate("/empedit")}}>EDIT</button>
        <button className='button3' onClick={()=>{navigate("/leavelist")}} >LEAVE LIST</button>
        <button className='button4' onClick={()=>{navigate("/leaveform")}}>LEAVE REQUEST</button>
      </div>
    </div>
  )
}

export default Emp_dahboard