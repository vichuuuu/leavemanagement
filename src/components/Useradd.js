import userEvent from '@testing-library/user-event'
import React,{useState} from 'react'
import '../styles/aduser.css'
import axios from 'axios'
import Admin_dashboard from './admin/Admin_dashboard'

function Useradd() {

  const [user, setUser] = useState({
    username:"",
    date_of_birth:"",
    age:"",
    email:"",
    emp_id:"",
    password:"",
    category:"",
    designation:"",
    mobile_number:"",
    department:""


  })

  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }


  const Add= ()=>{
    const tokens = (localStorage.getItem('token'))
    const {username,date_of_birth, age,email,emp_id,password,category,designation,mobile_number,department}=user
    // e.preventDefault()
    if(username && date_of_birth && age && email && emp_id && password && category && designation && mobile_number &&department){
       axios.post("http://localhost:4000/adduser",user,{ headers: { 'x-access-token': `${tokens}` } })
         .then(res=>alert(res.data.message))
        //  .then(res=>console.log((res)))
        
    }else{
        alert("invalid form...Please fill all the field")
    }
    
    
}
  return (
    <div>
        <Admin_dashboard/>
       


        <div className='add' >
        <h5>Add Employee</h5>
        {console.log("user",user)}
        <input type="text" name='username' value={user.username} placeholder='enter name'onChange={handleChange}></input>
         <input type="date"   name='date_of_birth' value={user.date_of_birth} placeholder='enter DOB'onChange={handleChange}></input> 
        <input type="Number"  name='age' value={user.age} placeholder='enter age' onChange={handleChange}></input>
        <input type="text"  name='email' value={user.email} placeholder='enter email id' onChange={handleChange}></input>
        <input type="Number"  name='emp_id' value={user.emp_id} placeholder='enter emp id' onChange={handleChange}></input>
        <input type="text"  name='password' value={user.password} placeholder='enter password' onChange={handleChange}></input>
        <input type="text"  name='category' value={user.category} placeholder='enter category' onChange={handleChange}></input> 
        <input type="text"  name='designation' value={user.designation} placeholder='enter designation' onChange={handleChange}></input> 
        <input type="text"  name='mobile_number' value={user.mobile_number} placeholder='enter contact number' onChange={handleChange}></input> 
        <input type="text"  name='department' value={user.department} placeholder='enter department name' onChange={handleChange}></input> 
        <br></br>
        <button  id="add-btn" type="submit" onClick={Add}>ADD</button>
      </div> 
        
    </div>
  )
}

export default Useradd