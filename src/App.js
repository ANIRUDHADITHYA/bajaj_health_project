import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from './Pages/Employee';
import EmployeeSummary from './Pages/EmployeeSummary';

function App() {
  return(

  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Employee />} />
      <Route exact path="/employee/:employee_id" element={<EmployeeSummary />} />
    </Routes>
  </BrowserRouter>
  )


}

export default App;
