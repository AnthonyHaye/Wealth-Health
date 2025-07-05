import { useContext, useState, useMemo } from "react";
import { WealthContext } from "../context/WealthContext";
import { generateManyFakeEmployees } from "../utils/fakeEmployee";
import {sortData} from "../utils/sortData";
import SortableTable from "../components/sortableTable/SortableTable";
import SearchFilter from "../components/searchFilter/SearchFilter";
import Pagination from "../components/Pagination/pagination";
import { useSort } from "../context/SortContext";
import "../styles/employeeList.scss";

export default function EmployeeList() {
  const { employees, addEmployee, clearEmployees } = useContext(WealthContext);
  const [searchText, setSearchText] = useState("");
  const [searchColumn, setSearchColumn] = useState("");

  const handleBulkGenerate = () => {
    const fakeList = generateManyFakeEmployees(100);
    fakeList.forEach(emp => addEmployee(emp));
  };

  const tablecolumns = [
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

  return tablecolumns.some(({ key }) => value(key).includes(search));
  });

  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const { sortConfig } = useSort();
  const handleChangeItemsPerPage = (event) => {
    setItemsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  const sortedEmployees = useMemo(() => {
  return sortData(filteredEmployees, sortConfig);
}, [filteredEmployees, sortConfig]);

const paginatedEmployees = useMemo(() => {
  const start = page * itemsPerPage;
  return sortedEmployees.slice(start, start + itemsPerPage);
}, [sortedEmployees, page, itemsPerPage]);


  return (
    <div className="container">
      <h1 className="page-title">HRnet – Employee List</h1>

      <div >
        {import.meta.env.MODE === "development" && (
          <>
            <button onClick={handleBulkGenerate}>Ajouter 100 employés</button>
            <button onClick={clearEmployees}>Supprimer tous les employés</button>          
          </>)}
        
        <p>Total employés : {employees.length}</p>
        <SearchFilter columns={tablecolumns} onChange={({ text, column }) => {
          setSearchText(text);
          setSearchColumn(column);
        }} />
        <p>{filteredEmployees.length > 0
            ? `${filteredEmployees.length} employé(s) trouvé(s)`
            : "Aucun résultat"}
        </p>

        <div className="boxPagination">
          <div className="pagination-controls">
            <label>
              Afficher :{" "}
              <select value={itemsPerPage} onChange={handleChangeItemsPerPage}>
                {[10, 25, 50, 100].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>{" "}
              employés par page
            </label>
          </div>

          <Pagination
            totalItems={filteredEmployees.length}
            itemsPerPage={itemsPerPage}
            currentPage={page}
            onPageChange={(newPage) => setPage(newPage)}
          />
        </div>


      </div>

      <div className="table-wrapper">
        <SortableTable columns={tablecolumns} data={paginatedEmployees} />      
                  
      </div>
    </div>
  );
}
