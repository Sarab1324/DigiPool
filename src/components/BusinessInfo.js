import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
function BusinessInfo() {
  return (
    <>
      <div className="leads my-5">
        <div className="stack2 d-flex  flex-column justify-content-center align-items-center">
          
            <h4>Business Info</h4>
            <form>
              <div className="b-forms h-100 my-5">
                <div className="first-form">
                  <p>Brand Name</p>
                  <input type="text" className="form-control" />
                </div>
                <div className="first-form">
                  <p>Registered business name</p>
                  <input type="text" className="form-control" />
                </div>
                <div className="first-form">
                  <p>Type of Company</p>
                  <Dropdown className="form-control down">
                    <Dropdown.Toggle
                      style={{ width: "100%", border: "none" }}
                      className="toggle"
                      variant=""
                      id="dropdown-basic"
                    >
                      Partnership
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="overflow-auto h-100">
                      <Dropdown.Item href="#/action-1">
                        Private Limited Company
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Public Limited Company
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Sole Proprietorship
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Partnership
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Kimited Liability Partnership (LLP)
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Liasion Office
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Subsidiary Company
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Join Hindu Family
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="first-form">
                  <p>Enter Contact</p>
                  <input
                    type="number"
                    className="form-control overflow-hidden"
                  />
                </div>
                <div className="first-form">
                  <p>Year of Establishment</p>
                  <input type="date" className="form-control" />
                </div>
                <div className="first-form">
                  <p>Company Turnover</p>
                  <input type="text" className="form-control" />
                </div>
                <div className="first-form">
                  <p>Number of Employees</p>
                  <input type="text" className="form-control" />
                </div>
                <div className="first-form">
                  <p>Number of Clients</p>
                  <input type="text" className="form-control" />
                </div>
                <div className="first-form">
                  <p>Website</p>
                  <input type="url" className="form-control" />
                </div>
                <div className="first">
                  <p>Business logo</p>
                  <input
                    type="file"
                    placeholder="Browse File"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="first">
                <p>Business Description</p>
                <textarea
                  cols="120"
                  className="form-control"
                  rows="5"
                ></textarea>
                <div className="business-button w-100 d-flex justify-content-end">
                  <button className="btn btn-success my-3">Save</button>
                </div>
              </div>
            </form>
          
        </div>
      </div>
      {/* <div className="business-form2 p-3">
         
        </div> */}
    </>
  );
}

export default BusinessInfo;
