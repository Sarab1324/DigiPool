import React from "react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Leads from "./Leads";
import Clients from "./Clients";
import Profile from "./Profile";
import Portfolio from "./Portfolio";
import FAQ from "./FAQ";
import Support from "./Support";

function DashBoard() {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  
  
  return (
    <>
      <NavBar menuVisible={menuVisible} toggleMenu={toggleMenu} />
      
      <SideBar menuVisible={menuVisible} setMenuVisible={setMenuVisible} toggleMenu={toggleMenu} />

        <Routes>
          <Route exact path="/" element={<Home />}  />
          <Route path="/leads" element={<Leads />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/portfolio" element={<Portfolio  />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/support" element={<Support />} />
          
        </Routes>
      
    </>
  );
}



export default DashBoard;
