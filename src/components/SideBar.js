import React from "react";
import Tabs from "./Tabs";

function SideBar({ menuVisible, toggleMenu }) {
  return (
    <>
      <div className={`side ${menuVisible ? "show-side " : ""}`}>
        <div className="logo">
          <img className="logo-img" width={200} src="FULL CART (1).png" alt="" />
        </div>
        <div className="user w-75">
          <img
            width={20}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png"
            alt=""
          />
          <h4>Ankit Raghuwanshi</h4>
        </div>
        <div className="tabs">
          <Tabs toggleMenu={toggleMenu} />
        </div>
      </div>
    </>
  );
}

export default SideBar;
