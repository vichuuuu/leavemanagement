import React, { useState } from 'react'
import axios from 'axios'
import '../styles/leavehandling.css'

function Admin_leavehandling() {

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


    axios.post('http://localhost:4000/applications')
        .then(res => (view(res)))
        .then(res => console.log(res))

    function view(res) {

        let html_data = ``
        {
            res.data.map((leave) => {
                html_data += `
        <tr>
            <td>${leave.emp_id}</td>
            <td>${leave.from_date}</td>
            <td>${leave.to_date}</td>
            <td>${leave.days}</td>
            <td>${leave.reason}</td>
            <td>${leave.status}</td>
        </tr>

            `
            })
        }
        document.querySelector("#result").innerHTML = html_data
    }

    const Approve = () => {
        const tokens = (localStorage.getItem('token'))
        axios.post('http://localhost:4000/leaveapproval',data,{ headers: { 'x-access-token': `${tokens}` } })
        .then(res => {
            alert(res.data.message)
        })

    }
    const Reject = () => {
        const tokens = (localStorage.getItem('token'))
        axios.post('http://localhost:4000/leaverejection',data,{ headers: { 'x-access-token': `${tokens}` } })
        .then(res => {
            alert(res.data.message)
        })

    }
   
   
   return (
        <div>

            <h3>List of  leave request and Status</h3>
            <table className="table" >
                <thead>
                    <tr >
                        <th scope="col">Emp ID</th>
                        <th scope="col">From Date</th>
                        <th scope="col">To Date</th>
                        <th scope="col">Days</th>
                        <th scope="col">Reason</th>
                        <th scope="col">Status</th>
                       
                    </tr>
                </thead>
                <tbody id="result">
                    <tr contentEditable={true} >
                        <th scope="row"></th>
                        <td></td>
                    </tr>

                    <tr>
                        <th scope="row"></th>
                        <td></td>
                    </tr>

                </tbody>
            </table>
            <input type="Number" name='emp_id' value={data.emp_id} onChange={handleChange} placeholder='emp_id'></input>
            <input type="text" name='from_date' value={data.from_date} placeholder='From Date' onChange={handleChange}></input>
            <input type="text" name='to_date' value={data.to_date} placeholder='To Date' onChange={handleChange}></input>
            <input type="Number" name='days' value={data.days} placeholder='Days' onChange={handleChange}></input>
            <input type="text" name='reason' value={data.reason} placeholder='Reason' onChange={handleChange}></input><br></br>
            <button type="button" class="btn btn-primary" onClick={Approve}>Approve</button>
            <button type="button" class="btn btn-danger" onClick={Reject}>Reject</button>
        </div>
    )
}

export default Admin_leavehandling