import React from 'react'
import '../employee/emp_dashboard.css'
import { useNavigate } from 'react-router-dom'

function Emp_dahboard() {
  let navigate=useNavigate()
  return (
    <div>

<nav class="navbar navbar-expand-lg navbar-light bg-primary ">
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

            <h6>Employee panel</h6>
            <button class="btn btn-outline-light text-light" type="submit">Logout</button>

          </div>
        </div>
      </nav>


      <div className='sidebar1'>
        <h4>MENU</h4>
        <button className='button1'> view</button>
        <button className='button2'>edit</button>
        <button className='button3'>leave list</button>
        <button className='button4' onClick={()=>{
          navigate("/leaveform")
        }}>leave request</button>
      </div>
    </div>
  )
}

export default Emp_dahboard