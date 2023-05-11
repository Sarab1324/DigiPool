import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Table from 'react-bootstrap/Table';
import MyDataTable from "./MyDataTable";

function Leads() {

  return (
    <>
    <div  className="leads">
    <div className="lead w-75 d-flex justify-content-between align-items-center">
      <h3>Leads</h3>
      <div className="searches d-flex justify-content-around align-items-center">
        <form>
          <CiSearch className="search-icon" />
          <input
          
            className="form-control w-10 ps-3"
            type="text"
            placeholder="Search"
          />
        </form>
        <DropdownButton className="w-50 mx-3" id="dropdown-basic-button" title="All">
          <Dropdown.Item href="#/action-1">All</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Active</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Proposal</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Change Proposal</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Hold</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Selected</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Rejected</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>

    <div className="lead-contact">
      <MyDataTable/>
    

    {/* <Table striped style={{border: '1px solid black'}} className="table">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Contact detail</th>
      <th>Requirement</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>6265621466</td>
      <td>Web Development</td>
      <td>
      Active
        </td> 
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>1234567890</td>
      <td>Android Development</td>
      <td>Progress</td> 
    </tr>
    <tr>
      <td>3</td>
      <td >Larry the</td>
      <td>1234567890</td>
      <td>IOS Development</td>
      <td>Rejected</td> 
    </tr>
  </tbody>
</Table> */}

  
    </div>


      {/* <div className="anima d-flex flex-column">
        <img src="insect.svg" alt="" />
        <p>No Leads Yet</p>

      </div> */}
    </div>
      
    </>
  );
}

export default Leads;
