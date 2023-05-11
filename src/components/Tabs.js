import React from "react";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { SiGoogleadsense } from "react-icons/si";
import { AiOutlineStar } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GrDocumentUser } from "react-icons/gr";
import { FaQuestionCircle } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { NavLink } from "react-router-dom";
function Tabs({toggleMenu}) {
 
  return (
    <>
      <div className="tabs">
        <ul>
          <NavLink to={"/"} className="link-das my-1">
            <li onClick={toggleMenu} >
              <MdOutlineDashboardCustomize /> Dashboard
            </li>
          </NavLink>
          <NavLink to={"/leads"} className="link-das my-1">
            <li onClick={toggleMenu}>
              <SiGoogleadsense /> Leads
            </li>
          </NavLink>
          <NavLink to="/clients" className="link-das my-1">
            <li onClick={toggleMenu}>
              <AiOutlineStar /> Clients
            </li>
          </NavLink>
          <NavLink to={"/profile"} className="link-das my-1">
            <li onClick={toggleMenu}>
              <CgProfile /> Profile
            </li>
          </NavLink>
          <NavLink to={"/portfolio"} className="link-das my-1">
            <li onClick={toggleMenu}>
              <GrDocumentUser /> Portfolio
            </li>
          </NavLink>
          <NavLink to={"/faq"} className="link-das my-1">
            <li onClick={toggleMenu}>
              <FaQuestionCircle /> FAQs
            </li>
          </NavLink>
          <NavLink to={"/support"} className="link-das my-1">
            <li onClick={toggleMenu}>
              <BiSupport /> Support
            </li>
          </NavLink>
        </ul>
      </div>
    </>
  );
}

export default Tabs;
