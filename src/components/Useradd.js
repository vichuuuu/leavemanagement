import userEvent from '@testing-library/user-event'
import React,{useState} from 'react'
import '../styles/aduser.css'
import axios from 'axios'

function Useradd() {

  const [user, setUser] = useState({
    username:"",
    date:"",
    age:"",
    email:"",
    emp_id:"",
    password:""


  })

  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }


  const Add= ()=>{
    const {username,date, age,email,emp_id,password}=user
    // e.preventDefault()
    if(username&&date&&age&&email&&emp_id&&password){
       axios.post("http://localhost:4000/adduser",user)
        // .then(res=>alert(res.data.message))
         .then(res=>console.log((res)))
        
    }else{
        alert("invalid form")
    }
    
    
}
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
                <a class="nav-link active text-light" href="#">Dashboard </a>
              </li>
            </ul>

            <h6>admin panel</h6>
            <button class="btn btn-outline-light text-light" type="submit" onClick={Add}>Logout</button>

          </div>
        </div>
      </nav>






      <div className='sidebar'>
        <h2>MENU</h2>
        <h4>Employee</h4>
        {/* <a href='view'>view</a><br></br>
        <a href='add'>add</a><br></br>
        <a href='edit'>edit</a> */}
        <button className='btn1' >view</button>
        <button className='btn2' > add</button>
        <button className='btn3' >edit</button>


        <h4>Department</h4>
        <button className='btn1' >add</button>
        <button className='btn1' >update</button>

        <h4>Leave</h4>
        <button className='btn1' >application</button>
        
      </div>




 
        <div className='add' >
        <h5>Add Employee</h5>
        {console.log("user",user)}
        <input type="text" name='username' value={user.username} placeholder='enter name'onChange={handleChange}></input>
        <input type="text"   name='date' value={user.date} placeholder='enter DOB'onChange={handleChange}></input>
        <input type="Number"  name='age' value={user.age} placeholder='enter age' onChange={handleChange}></input>
        <input type="text"  name='email' value={user.email} placeholder='enter email id' onChange={handleChange}></input>
        <input type="Number"  name='emp_id' value={user.emp_id} placeholder='enter emp id' onChange={handleChange}></input>
        <input type="text"  name='password' value={user.password} placeholder='enter password' onChange={handleChange}></input>
        <button  id="add-btn" type="submit">ADD</button>
      </div> 
        
    </div>
  )
}

export default Useradd