import React from 'react'
import axios from 'axios'

function View_department() {

  axios.post('http://localhost:4000/viewdepartment')
  .then(res=>(view(res)))

  function view(res){
      let html_data=``
      {res.data.map((dept)=>{
          html_data+=`
          <tr>
          <td>${dept.department_name}</td>
          <td>${dept.department_id}</td>
         
          </tr>

          `
      })}
      document.querySelector("#result").innerHTML = html_data
    }
  return (
    <div>
      <h3>Department List</h3>
      <table className="table" >
            <thead>
                <tr >
                 
                    <th scope="col">Department Name</th>
                    <th scope="col">Department ID</th>
                    
                </tr>
            </thead>
            <tbody id="result">
                <tr  contentEditable={true} >
                    <th scope="row"></th>
                    <td></td>
                    
                </tr>
                
                <tr>
                    <th scope="row"></th>
                    <td></td>
                   
                </tr>
                {/* <tr>
                    <th scope="row"></th>
                   
                    <td></td>
                </tr> */}
            </tbody>
        </table>
    </div>
  )
 }

export default View_department