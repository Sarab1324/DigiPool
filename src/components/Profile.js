import TabComponent from "./TabComponent";
import * as React from "react";


function Profile() {
  return (
    <>
      <div  className="leads ">
        <div className="lead mb-3 w-75 d-flex justify-content-between align-items-center">
          <h3>My Profile</h3>
        </div>
        <TabComponent/>
      </div>
    </>
  );
}

export default Profile;
