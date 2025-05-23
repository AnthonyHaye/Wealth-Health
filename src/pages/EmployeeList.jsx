import { useContext, useState } from "react";
import { WealthContext } from "../context/WealthContext";
import { generateManyFakeEmployees } from "../utils/fakeEmployee";
import SortableTable from "../components/sortableTable/SortableTable";
import "../styles/employeeList.scss";
import SearchFilter from "../components/searchFilter/SearchFilter";

export default function EmployeeList() {
  const { employees, addEmployee, clearEmployees } = useContext(WealthContext);
  const [searchText, setSearchText] = useState("");
  const [searchColumn, setSearchColumn] = useState("");

  

  const handleBulkGenerate = () => {
    const fakeList = generateManyFakeEmployees(10000);
    fakeList.forEach(emp => addEmployee(emp));
  };

  const columns = [
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "Date of Birth", key: "dateOfBirth" },
    { label: "Start Date", key: "startDate" },
    { label: "Department", key: "department" },
    { label: "Street", key: "street" },
    { label: "City", key: "city" },
    { label: "State", key: "state" },
    { label: "Zip Code", key: "zipCode" },
  ];  

  const filteredEmployees = employees.filter((emp) => {
  if (!searchText) return true;
  const value = (col) => emp[col]?.toString().toLowerCase();
  const search = searchText.toLowerCase();

  if (searchColumn) {
    return value(searchColumn).includes(search);
  }

  return columns.some(({ key }) => value(key).includes(search));
  });
  

  return (
    <div className="container">
      <h1 className="page-title">HRnet – Employee List</h1>

      <div style={{ marginBottom: "1rem" }}>
        <button onClick={handleBulkGenerate}>Ajouter 100 employés</button>
        <button onClick={clearEmployees}>Supprimer tous les employés</button>
        <p>Total employés : {employees.length}</p>
        <SearchFilter columns={columns} onChange={({ text, column }) => {
          setSearchText(text);
          setSearchColumn(column);
          console.log("Filtrer:", text, "dans la colonne:", column);
        }} />
        <p>{filteredEmployees.length > 0
            ? `${filteredEmployees.length} employé(s) trouvé(s)`
            : "Aucun résultat"}
        </p>

      </div>

      <div className="table-wrapper">
        <SortableTable columns={columns} data={filteredEmployees} />      
                  
      </div>
    </div>
  );
}
