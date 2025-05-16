import { useContext } from "react";
import { WealthContext } from "../context/WealthContext";
import { generateManyFakeEmployees } from "../utils/fakeEmployee";
import "../styles/employeeList.scss";

export default function EmployeeList() {
  const { employees, addEmployee, clearEmployees } = useContext(WealthContext);

  

  const handleBulkGenerate = () => {
    const fakeList = generateManyFakeEmployees(10000);
    fakeList.forEach(emp => addEmployee(emp));
  };

  return (
    <div className="container">
      <h1 className="page-title">HRnet – Employee List</h1>

      <div style={{ marginBottom: "1rem" }}>
        <button onClick={handleBulkGenerate}>Ajouter 100 employés</button>
        <button onClick={clearEmployees}>Supprimer tous les employés</button>
        <p>Total employés : {employees.length}</p>
      </div>

      <div className="table-wrapper">
        <table className="employee-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date of Birth</th>
              <th>Start Date</th>
              <th>Department</th>
              <th>Street</th>
              <th>City</th>
              <th>State</th>
              <th>Zip Code</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.map((emp, index) => (
                <tr key={index}>
                  <td>{emp.firstName}</td>
                  <td>{emp.lastName}</td>
                  <td>{emp.dateOfBirth}</td>
                  <td>{emp.startDate}</td>
                  <td>{emp.department}</td>
                  <td>{emp.street}</td>
                  <td>{emp.city}</td>
                  <td>{emp.state}</td>
                  <td>{emp.zipCode}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9">No employees found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
