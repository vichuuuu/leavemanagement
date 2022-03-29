import React from 'react'
import '../employee/leaveform.css'
import Emp_dahboard from './Emp_dahboard'

function Leaveform() {
  return (
    <div>
     <Emp_dahboard/>
      
<div className='leave'>
  <h3>Leave Request Form</h3>
      <input type='text' placeholder='Employee id'></input>
       <input type='text' placeholder='From Date'></input>
       <input type='text' placeholder=' To Date'></input>
       <input type='Number' placeholder='Number of days'></input>
       <input type='text' placeholder='Reason for leave'></input><br></br>
       <button  id="leave_btn" type="submit">submit</button>

</div>
      
    </div>
  )
}

export default Leaveform