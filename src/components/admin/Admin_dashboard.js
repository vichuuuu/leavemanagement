import React from 'react'
import '../admin/ad_dashboard.css'
import { useNavigate } from 'react-router-dom'

function Admin_dashboard() {

  let navigate = useNavigate()
  return (
    <div >
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

            <h6>admin panel</h6>
            <button class="btn btn-outline-light text-light" type="submit">Logout</button>

          </div>
        </div>
      </nav>
      <div className='sidebar'>
        <h2>MENU</h2>
        <h4>Employee</h4>
       
        <button className='btn1' >view</button>
        <button className='btn2' onClick={() => {
          navigate("/user")
        }}> add</button>
        <button className='btn3' >edit</button>
        <button className='btn3' onClick={()=>{
          navigate("/deleteuser")
        }} >delete</button>


        <h4>Department</h4>
        <button className='btn1' onClick={()=>{
          navigate("/view_department")
        }}>view</button>
        <button className='btn1' onClick={() => {
          navigate("/ad_dept")
        }} >add</button>
        <button className='btn1' >edit</button>

        <h4>Leave</h4>
        <button className='btn1' >application</button>
        
      </div>
    </div>

  )
}

export default Admin_dashboard