import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
function Service() {
  return (
    <div className="leads my-5">
    <div className="stack2">
    <div className="w-75 d-flex justify-content-between align-items-center">
      <div className="btn w-100 my-0 d-flex justify-content-end">
        <button className="btn btn-success  d-flex align-items-center">
          <AiOutlinePlus color={"white"} /> Add Custom Services
        </button>
        <button className="btn btn-success mx-3 d-flex align-items-center">
          <AiOutlinePlus color={"white"} /> Add Services
        </button>
      </div>
    </div>
    <div className="d-flex flex-column align-items-center">
      <img src="sheet.svg" alt="" />
      <p>No Service Yet</p>
    </div>

    </div>
  </div>
      
  )
}

export default Service