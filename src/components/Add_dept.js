import React, { useState } from 'react'
import Admin_dashboard from './admin/Admin_dashboard'
import '../styles/add_dept.css'
import axios from 'axios'

function Add_dept() {
    const [department, setDepartment] = useState({
        department_name: "",
        department_id: ""

    })
    const handleChange = e => {
        const { name, value } = e.target
        setDepartment({
            ...department,
            [name]: value
        })
    }

    const Add_department= (e)=>{
        const {department_name,department_id}=department
         e.preventDefault()
        if(department_name && department_id){
           axios.post("http://localhost:4000/adddepartment",department)
             .then(res=>alert(res.data.message))
            //  .then(res=>console.log((res)))
            
        }else{
            alert("invalid form ...Please fill all the field")
        }
        
        }
    return (
        <div>
            <Admin_dashboard />

            <div className='department'>
                <h3>ADD DEPARTMENT</h3>
                <input type='text' name='department_name' value={department.department_name} placeholder='Enter name of the department'
                    onChange={handleChange} required></input>
                <input type='' name='department_id' value={department.department_id} placeholder='Enter department id'
                    onChange={handleChange} required></input> <br></br>
                <button type='submit' id='department_add_btn' onClick={Add_department}>ADD</button>
            </div>

        </div>
    )
}

export default Add_dept