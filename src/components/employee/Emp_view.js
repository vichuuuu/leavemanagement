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

    const mydata =  (e) => {

        const { emp_id } = empid
        e.preventDefault()
         axios.post("http://localhost:4000/mydetails", empid)
            // .then(res => alert(res.data.message))
            .then(res => console.log(res))
            .then(res => displayValue())

    }


    function displayValue(res) {
        
         let emp_name = res.username
         console.log(emp_name)

    //     let emp_id = data.emp_id
    //     let dob = data.date_of_birth
    //     let age = data.age
    //     let password = data.password
    //     let emailid = data.email


    //     let html_data = `
    
    //     <div class="card" style="width: 18rem;">
    
    //   <div class="card-body">
    //     <h5 class="card-title">${emp_name}</h5>
    //   </div>
    // <ul class="list-group list-group-flush">
    //    <li class="list-group-item">EMPLOYEE ID:${emp_id}</li>
    //    <li class="list-group-item">DOB:${dob}</li>
    //    <li class="list-group-item">AGE:${age}</li>
    //    <li class="list-group-item">PASSWORD:${password}</li>
    //    <li class="list-group-item">EMAIL ID:${emailid}</li>
    //  </ul>
    //  </div>
    //     `
        //  document.querySelector("#result").innerHTML=html_data
    }
    return (
        <div>
        <Emp_dahboard/>

            <div className="row">
                <div className="col-4"></div>
                <div className="col-lg-3 col-md-4 col-sm-12">
                    <input type="text" id="employeeid" name="emp_id" value={empid.emp_id} placeholder="enter employee id" onChange={handleChange}></input><br></br>
                    <button type="submit" id="view_btn" onClick={mydata}>Submit</button>
                </div>
                <div className="col-4"></div>

            </div>
        </div>
    )
}

export default Emp_view