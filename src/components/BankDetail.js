import React from "react";

function BankDetail() {
  return (
    <>
      <div className="leads my-5">
        <div className="stack2 d-flex  flex-column justify-content-center align-items-center">
          <h4>Bank Details</h4>
          <form>
            <div className="b-forms2 h-100 my-5">
              <div className="first-form">
                <p>Bank Name</p>
                <input type="text" className="form-control" />
              </div>
              <div className="first-form">
                <p>Account Number</p>
                <input type="number" className="form-control" />
              </div>
              <div className="first-form">
                <p>IFSC Code</p>
                <input type="number" className="form-control overflow-hidden" />
              </div>
              <div className="first-form">
                <p>Branch Name</p>
                <input type="text" className="form-control" />
              </div>

              <div className="first-form">
                <p>Upload Cancel Cheque</p>
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

export default BankDetail;
