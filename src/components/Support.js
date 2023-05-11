import React from 'react'
import { CiSearch } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";
function Support() {
  return (
    <div  className="leads">
      
    <div className="lead w-75 d-flex justify-content-between align-items-center">
      <div className="searches w-75 d-flex justify-content-between align-items-center">
        <form>
          <CiSearch className="search-icon" />
          <input
          
            className="form-control w-10"
            type="text"
            placeholder="Search tickets"
          />
        </form>
        <button className="btn btn-primary  d-flex align-items-center">
              <AiOutlinePlus color={"white"} /> Raise Ticket
        </button>
      
      </div>
    </div>
      <div className="anima d-flex flex-column">
        <img src="ticket.svg" alt="" />
        <p>No Tickets Yet</p>

      </div>
    </div>
  )
}

export default Support