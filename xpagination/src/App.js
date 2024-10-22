import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        alert("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  const indexOfLastEmployee = currentPage * rowsPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - rowsPerPage;
  const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const totalPages = Math.ceil(employees.length / rowsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
      console.log("next button click");
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="container-div">
      <h1>Employee Data Table</h1>

      <table className="rows" border="1" cellPadding="10" cellSpacing="0">
        <thead style={{ color: "antiquewhite", backgroundColor: "green" }}>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <button className="button" onClick={prevPage}>
          Previous
        </button>
       <button>{currentPage}</button>
        <button className="button" onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
