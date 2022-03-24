import React from 'react'
import '../employee/leaveform.css'

function Leaveform() {
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
      
<div className='leave'>
  <h3>Leave Request Form</h3>
      <input type='text' placeholder='Employee id'></input>
       <input type='text' placeholder='Date'></input>
       <input type='text' placeholder='Reason for leave'></input>
       <button  id="leave_btn" type="submit">submit</button>

</div>
      
    </div>
  )
}

export default Leaveform