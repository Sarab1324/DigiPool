import React from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";

function Portfolio() {
  return (
    <>
    <div className="leads">
    <div className="lead w-75 d-flex justify-content-between align-items-center">
      
      <div className="searches w-75 d-flex justify-content-between align-items-center">
        <form className="form">
          <CiSearch className="search-icon" />
          <input
          
            className="form-control w-10"
            type="text"
            placeholder="Search Portfolios"
          />
        </form>
        <button className="btn btn-primary port-btn  d-flex align-items-center">
              <AiOutlinePlus color={"white"} /> Add Project
        </button>
      
      </div>
    </div>
      <div className="anima d-flex flex-column">
        <img src="profile.svg" alt="" />
        <p>No Portfolios Yet</p>

      </div>
    </div>
    </>
  );
}

export default Portfolio;
