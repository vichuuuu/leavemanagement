import React, { useState } from 'react'
import '../employee/empview.css'
import axios from 'axios'
import Emp_dahboard from './Emp_dahboard'


function Emp_view() {

    const [empid, setEmpid] = useState({
        emp_id: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setEmpid({
            ...empid,
            [name]: value
        })
    }

    const mydata = async () => {
        const tokens = (localStorage.getItem('token'))
        axios.post("http://localhost:4000/mydetails", empid,{ headers: { 'x-access-token': `${tokens}` } })
             .then(data => displayValue(data))
            
    }

    function displayValue(res) {

        let emp_name = res.data.username
        let emp_id = res.data.emp_id
        let dob = res.data.date_of_birth
        let age = res.data.age
        let password = res.data.password
        let emailid = res.data.email
        let designation = res.data.designation
        let mobile = res.data.mobile_number
        let department = res.data.department


        let html_data = `

            <div class="card" style="width: 18rem;">

          <div class="card-body">
            <h5 class="card-title">${emp_name}</h5>
          </div>
        <ul class="list-group list-group-flush">
           <li class="list-group-item">Employee id:${emp_id}</li>
           <li class="list-group-item">Email id:${emailid}</li>
           <li class="list-group-item">Contact number:${mobile}</li>
           <li class="list-group-item">Designation:${designation}</li>
           <li class="list-group-item">Designation:${department}</li>
           <li class="list-group-item">Date of birth:${dob}</li>
           <li class="list-group-item">Age:${age}</li>
           <li class="list-group-item">Password:${password}</li>
        </ul>
         </div>
            `
        document.querySelector("#result").innerHTML = html_data
    }
    return (
        <div>

            <Emp_dahboard />

            <div className='viewmydata'>
                <input type="text" id="employeeid" name="emp_id" value={empid.emp_id} placeholder="enter employee id"
                 onChange={handleChange}></input>
                <button type="submit" id="view_btn" onClick={mydata}>Submit</button>
            </div>

            <div className="row">
                <div className="col-4"></div>
                <div className="col-lg-3 col-md-4 col-sm-12" id="result">


                </div>
                <div className="col-4"></div>

            </div>
        </div>
    )
}

export default Emp_view

