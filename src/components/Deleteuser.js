import React,{useState} from 'react'
import Admin_dashboard from './admin/Admin_dashboard'
import Emp_dahboard from './employee/Emp_dahboard'
import '../styles/delete.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Deleteuser() {
    let navigate = useNavigate()
    
  const [emp_id, setEmp_id] = useState({
   emp_id:""
  })


  const handleChange = e => {
    const { name, value } = e.target
    setEmp_id({
      ...emp_id,
      [name]: value
    })
  }
  const Delete= async (e) => {
    
    e.preventDefault()
    
      const res = await axios.post("http://localhost:4000/delete", emp_id)
         .then(res => alert(res.data))
        .then(res=>console.log(res))
        navigate("/emp_login")
        
     }
  return (
    <div>
        <Admin_dashboard/>
        <div className='delete'>
            <h3>DELETE EMPLOYEE</h3>
           <input type='number'name='emp_id' value={emp_id.emp_id} placeholder='Enter employee id'
           onChange={handleChange}></input>
            <button type='submit' onClick={Delete}>DELETE</button>
        </div>
    </div>
  )
}

export default Deleteuser