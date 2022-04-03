import React from 'react'
import axios from 'axios'
import '../styles/viewall.css'

function Viewall() {
    
    axios.post('http://localhost:4000/viewall')
    .then(res=>(view(res)))

    function view(res){
        let html_data=``
        {res.data.map((emp)=>{
            html_data+=`
            <tr>
            <td>${emp.username}</td>
            <td>${emp.emp_id}</td>
            <td>${emp.age}</td>
            <td>${emp.email}</td>
            <td>${emp.password}</td>
            <td>${emp.designation}</td>
            <td>${emp.department}</td>
            <td>${emp.mobile_number}</td>
            </tr>

            `
        })}
        document.querySelector("#result").innerHTML = html_data
    }
  return (
    <div>
    <p>Empolyee Details</p>
    <table className="table" >
            <thead>
                <tr >
                 
                    <th scope="col">Employee Name</th>
                    <th scope="col">Emp ID</th>
                    <th scope="col">Age</th>
                    <th scope="col" >Email</th>
                    <th scope="col" >password</th>
                    <th scope="col" >Designation</th>
                    <th scope="col" >Department</th>
                    <th scope="col" >Contact number</th>
                </tr>
            </thead>
            <tbody id="result">
                <tr  contentEditable={true} >
                    <th scope="row"></th>
                    <td></td>
                    {/* <td></td>
                    <td></td> */}
                </tr>
                
                <tr>
                    <th scope="row"></th>
                    <td></td>
                    {/* <td></td>
                    <td></td> */}
                </tr>
                <tr>
                    <th scope="row"></th>
                    {/* <td colspan="2"></td> */}
                    <td></td>
                </tr>
            </tbody>
        </table>
</div>
  )
}

export default Viewall