import React, { useState, useEffect } from 'react';
import './App.css';

function App(){
      const [data, setData] = useState([]);
      const [currentPage, setCurrentPage] = useState(1);
      const rowsPerPage = 10;
      const [error, setError] = useState(null);
    
      useEffect(() => {
        fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => setData(data))
          .catch((error) => {
            setError(error);
            alert('failed to fetch data');
          });
      }, []);
    
      // Calculate the data for the current page
      const indexOfLastRow = currentPage * rowsPerPage;
      const indexOfFirstRow = indexOfLastRow - rowsPerPage;
      const currentData = data.slice(indexOfFirstRow, indexOfLastRow);
    
      // Total number of pages
      const totalPages = Math.ceil(data.length / rowsPerPage);
    
      const handleNext = () => {
        if (currentPage < totalPages) {
          setCurrentPage(currentPage + 1);
        }
      };
    
      const handlePrevious = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      };
    
      return (
        <div>
          <h1 style={{textAlign:'center'}}>Employee Data Table</h1>
          <table style={{ width: '100%', textAlign: 'center' }}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((employee,i) => (
                <tr key={employee.id}>
                    {currentPage === 1?<td>{i+1}</td>:<td>{(currentPage*rowsPerPage)-(rowsPerPage-(i+1))}</td>}
                  {/* <td>{(i+1)*rowsPerPage}</td> */}
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: '20px',display:'flex',justifyContent:'center' }}>
            <button onClick={handlePrevious}>
              Previous
            </button>
            <span style={{ margin: '0 10px' }}>{currentPage}</span>
            <button onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      );
}

export default App;
