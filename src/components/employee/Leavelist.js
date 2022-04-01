import React, { useState } from 'react'
import axios from 'axios'
import '../employee/empview.css'
import Emp_dahboard from './Emp_dahboard'

function Leavelist() {
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
    const list = async () => {
        axios.post("http://localhost:4000/leavelist", empid)
            .then(data => displayValue(data))
         .then(res=>console.log(res))
      
    }

    function displayValue(res) {

       
        let emp_id = res.data.emp_id
        let from_date = res.data.from_date
        let to_date= res.data.to_date
        let days = res.data.days
        let reason = res.data.reason
        let status = res.data.status
        


        let html_data = `

            <div class="card" style="width: 18rem;">

          <div class="card-body">
          <h5>Leave List</h5>
          </div>
        <ul class="list-group list-group-flush">
           <li class="list-group-item">Employee id:${emp_id}</li>
           <li class="list-group-item">From Date:${from_date}</li>
           <li class="list-group-item">To Date:${to_date}</li>
           <li class="list-group-item">Number of days:${days}</li>
           <li class="list-group-item">Reason:${reason}</li>
           <li class="list-group-item" id="status">Status:${status}</li>
        
          
        </ul>
         </div>
            `
        document.querySelector("#result").innerHTML = html_data
    }
    return (
        <div>
      <Emp_dahboard/>
            <div className='viewmydata'>
                <input type="text" id="employeeid" name="emp_id" value={empid.emp_id} placeholder="enter employee id"
                    onChange={handleChange}></input>
                <button type="submit" id="view_btn" onClick={list}>Submit</button>
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

export default Leavelist