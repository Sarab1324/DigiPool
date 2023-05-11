import React from "react";
import { VscProject, VscCloseAll } from "react-icons/vsc";
import { RiFileAddLine } from "react-icons/ri";
import { MdOutlineFreeCancellation, MdPendingActions } from "react-icons/md";
function Home( ) {
  
  return (
    <>
      <div className="home">
        <div className="hero w-100 d-flex justify-content-between align-items-center">
          <div className="hero1  d-flex justify-content-around align-items-center">
            <div className="intro w-50">
              <h4>Welcome!</h4>
              <h4>Ankit Raghuwanshi</h4>
              <p>
                This is a summary of all the projects you've <br /> worked on
                until now. Your customized dashboard <br /> allows you to
                effortlessly oversee and organize all of your tasks.
              </p>
            </div>
            <div className="animate w-25">
              <img src="banknote.png" alt="" />
            </div>
          </div>
          <div className="hero2">
            <h4>Total Balance</h4>
            <div className="h2">0 INR</div>
            <button className="w-75 btn btn-success">
              View all transactions
            </button>
          </div>
        </div>
        <div className="analyze mt-5">
          <h4 className="analytic">Analytics Overview</h4>

          <div className="feats">
            <div className="box">
              <div className="cir">
                <VscProject size={50} />
              </div>
              <div className="paras">
                <h6>Active Projects</h6>
                <h4>0</h4>
              </div>
            </div>
            <div className="box">
              <div className="cir">
                <VscCloseAll size={50} />
              </div>
              <div className="paras">
                <h6>Closed Projects</h6>
                <h4>0</h4>
              </div>
            </div>
            <div className="box">
              <div className="cir">
                <RiFileAddLine size={50} />
              </div>
              <div className="paras">
                <h6>Accepted Lead</h6>
                <h4>0</h4>
              </div>
            </div>
            <div className="box">
              <div className="cir">
                <MdOutlineFreeCancellation size={50} />
              </div>
              <div className="paras">
                <h6>Rejected Lead</h6>
                <h4>0</h4>
              </div>
            </div>
            <div className="box">
              <div className="cir">
                <MdPendingActions size={50} />
              </div>
              <div className="paras">
                <h6>Pending Lead</h6>
                <h4>0</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
