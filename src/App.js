import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Add_dept from './components/Add_dept';

import Admin_dashboard from './components/admin/Admin_dashboard';
import Admin_login from './components/Admin_login';
import Emp_dahboard from './components/employee/Emp_dahboard';
import Emp_view from './components/employee/Emp_view';
import Leaveform from './components/employee/Leaveform';
import Employee_login from './components/Employee_login';
import Homepage from './components/Homepage';
import Useradd from './components/Useradd';
import Emp_edit from './components/employee/Emp_edit';
import Deleteuser from './components/Deleteuser'
import View_department from './components/View_department';


function App() {
  return (
    <div className="App">
      
     <Router>
     <Routes>
     <Route path="/" element={<Homepage />} />
     <Route path="/admin_login" element={<Admin_login />} />
     <Route path="/emp_login" element={<Employee_login />} />
     <Route path="/dashboard" element={<Admin_dashboard />} />
     <Route path="/user" element={<Useradd />} />
     <Route path="/empdashboard" element={<Emp_dahboard/>} />
     <Route path="/ad_dept" element={<Add_dept/>} />
     <Route path="/leaveform" element={<Leaveform/>} />
     <Route path="/empview" element={<Emp_view/>} />
     <Route path="/empedit" element={<Emp_edit/>} />
     <Route path="/deleteuser" element={<Deleteuser/>} />
     <Route path="/view_department" element={<View_department/>} />
   
   
     </Routes>
     </Router>
    </div>
  );
}

export default App;
