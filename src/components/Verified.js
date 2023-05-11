import React from "react";

function Verified() {
  return (
    <>
      <div className="leads my-5">
        <div className="stack2 d-flex  flex-column justify-content-center align-items-center">
        <h4>Business Verification Details</h4>
          <form>
            <div className="b-forms2 h-100 my-5">
              <div className="first-form">
                <p>Business Pan</p>
                <input type="text" className="form-control" />
              </div>
              <div className="first-form">
                <p>Upload Business Pan</p>
                <input type="file" className="form-control" />
              </div>
              <div className="first-form">
                <p>GST number</p>
                <input type="text" className="form-control overflow-hidden" />
              </div>
              <div className="first-form">
                <p>Upload GST file</p>
                <input type="file" className="form-control" />
              </div>
              <div className="first-form">
                <p>Aadhar number</p>
                <input type="text" className="form-control overflow-hidden" />
              </div>

              <div className="first-form">
                <p>Upload Aadhar file</p>
                <input
                  type="file"
                  placeholder="Browse File"
                  className="form-control"
                />
              </div>
              <div className="first-form">
                <p>Coc Number</p>
                <input type="text" className="form-control overflow-hidden" />
              </div>

              <div className="first-form">
                <p>Upload Coc file</p>
                <input
                  type="file"
                  placeholder="Browse File"
                  className="form-control"
                />
              </div>
              <div className="first-form">
                <p>Msme Registration Number</p>
                <input type="text" className="form-control overflow-hidden" />
              </div>

              <div className="first-form">
                <p>Msme Registration file</p>
                <input
                  type="file"
                  placeholder="Browse File"
                  className="form-control"
                />
              </div>
              <div className="first-form">
                <p>Upload Office Address Proof</p>
                <input
                  type="file"
                  placeholder="Browse File"
                  className="form-control"
                />
              </div>

              <div className="business-button w-100 d-flex justify-content-end align-items-center">
                <button className="btn btn-success my-1">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Verified;
