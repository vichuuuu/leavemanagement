import React,{useState} from 'react'
import '../employee/empedit.css'
import Emp_dahboard from './Emp_dahboard'
import axios from 'axios'


function Emp_edit() {

  const [user, setUser] = useState({
    username:"",
     mobile_number:"",
     email:"",
     emp_id:""
  })
  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }
  const update = async () => {
    
     const { username, mobile_number,email,emp_id } = user
    

    axios.put("http://localhost:4000/editmydetails",user)
    // .then(res=> console.log(res))
    .then(res=> alert(res.data.message))
    
  
  }
  
  return (
    <div>
      <Emp_dahboard/>
<div className='editfields'>
      <h3>Edit your details</h3>
        <input type="text" name='username' value={user.username} placeholder='enter name'onChange={handleChange}></input>
        <input type="Number"  name='mobile_number' value={user.mobile_number} placeholder='enter new contact number' onChange={handleChange}></input>
        <input type="text"  name='email' value={user.email} placeholder='enter  new email id' onChange={handleChange}></input>
        <input type="Number"  name='emp_id' value={user.emp_id} placeholder='enter emp id' onChange={handleChange}></input>
        <div className='edit_button'onClick={update} >UPDATE</div>

{/* <button  id="edit-btn" type="submit" onClick={update}>update</button> */}
    </div>
    </div>
    
  )
}

export default Emp_edit