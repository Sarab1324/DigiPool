import React from "react";
import { CiSearch } from "react-icons/ci";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Table from 'react-bootstrap/Table';
function Clients() {
  return (
    <>
    <div  className="leads">
    <div className="lead w-75 d-flex justify-content-between align-items-center">
      <h3>Clients</h3>
      <div className="searches d-flex justify-content-around align-items-center">
        <form>
          <CiSearch className="search-icon" />
          <input
          
            className="form-control w-10"
            type="text"
            placeholder="Search clients"
          />
        </form>
        <DropdownButton className="w-50 mx-3" id="dropdown-basic-button" title="All">
          <Dropdown.Item href="#/action-1">All</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Active</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Closed</Dropdown.Item>
          
        </DropdownButton>
      </div>
    </div>



    <div className="lead-contact">
    

    <Table striped style={{border: '1px solid black'}} className="table">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Contact detail</th>
      <th>Requirement</th>
      <th>Budget</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>6265621466</td>
      <td>Web Development</td>
      <td>
      1,50,000
        </td> 
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>6265621466</td>
      <td>@fat</td>
      <td>1,20,000</td> 
    </tr>
    <tr>
      <td>3</td>
      <td >Larry the Bird</td>
      <td>6265621466</td>
      <td>@fat</td>
      <td>1,10,000</td> 
    </tr>
  </tbody>
</Table>

  
    </div>
      {/* <div className="anima d-flex flex-column">
        <img src="sheet.svg" alt="" />
        <p>No Clients Yet</p>

      </div> */}
    </div>
      
    </>
  );
}

export default Clients;
