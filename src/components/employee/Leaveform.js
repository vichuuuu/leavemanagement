import React, { useState } from 'react'
import '../employee/leaveform.css'
import Emp_dahboard from './Emp_dahboard'
import axios from 'axios'


function Leaveform() {
  const [data, setData] = useState({
    emp_id: "",
    from_date: "",
    to_date: "",
    days: "",
    reason: ""
  })
  const handleChange = e => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  const Request = async () => {
    // const username = JSON.parse(localStorage.getItem("username"))
    //     const password = JSON.parse(localStorage.getItem("password"))
     const tokens = (localStorage.getItem('token'))
    const { emp_id, from_date, to_date, days, reason } = data

    if (emp_id && from_date && to_date && days && reason) {
      axios.post("http://localhost:4000/leaverequest", data,{ headers: { 'x-access-token': `${tokens}` } })
        .then(res => alert(res.data.message))
      // .then(res=>console.log((res)))

    } else {
      alert("invalid form")
    }
  }
  return (
    <div>
      <Emp_dahboard />

      <div className='leave'>
        <h3>Leave Request Form</h3>
        <input type='text' name='emp_id' value={data.emp_id} placeholder='Employee id' onChange={handleChange}></input>
        <input type='text' name='from_date' value={data.from_date} placeholder='From Date' onChange={handleChange}></input>
        <input type='text' name='to_date' value={data.to_date} placeholder=' To Date' onChange={handleChange}></input>
        <input type='Number' name='days' value={data.days} placeholder='Number of days' onChange={handleChange}></input>
        <input type='text' name='reason' value={data.reason} placeholder='Reason for leave' onChange={handleChange}></input><br></br>
        <button id="leave_btn" type="submit" onClick={Request}>submit</button>

      </div>

    </div>
  )
}

export default Leaveform