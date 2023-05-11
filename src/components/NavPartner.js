import React from "react";
import { Link } from "react-router-dom";
import { HiChevronDown } from "react-icons/hi";
import "bootstrap/dist/css/bootstrap.css";
import Tooltip from "react-bootstrap/Tooltip";
import {BiMenuAltLeft} from 'react-icons/bi'
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Dropdown } from "react-bootstrap";
function NavPartner() {
  return (
    <>
      <nav className="nav-partner">
      <BiMenuAltLeft size={30} className='menu'/>
        <Link to="/">
          <img width={100} src="FULL CART (7).png" alt="logo" />
        </Link>
        <div className="log-partner">
          <div className="service-partner mx-3 ">
            <div style={{ display: "block", marginTop: 22 }}>
              <OverlayTrigger
                delay={{ hide: 450, show: 300 }}
                overlay={(props) => (
                  <Tooltip {...props} className="tooltip">
                    
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    
                  </Tooltip>
                )}
                placement="bottom"
              >
                <p style={{ cursor: "pointer" }}>
                  Services <HiChevronDown />
                </p>
              </OverlayTrigger>
              ,
            </div>
          </div>
          <div className="community-partner mx-3">
            <div style={{ display: "block" }}>
              <OverlayTrigger
                delay={{ hide: 450, show: 300 }}
                overlay={(props) => (
                  <Tooltip {...props}>
                    Hii, I am a simple tooltip information!!!
                  </Tooltip>
                )}
                placement="bottom"
              >
                <p style={{ cursor: "pointer" }}>
                  Community
                  <HiChevronDown />
                </p>
              </OverlayTrigger>
            </div>
          </div>
          <Link to="/signin">
            <button className="btn btn-success">Login</button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavPartner;
