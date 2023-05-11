import React from "react";
// import { RiWallet2Fill } from "react-icons/ri";
// import { BsFillBellFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import {BiMenuAltLeft} from 'react-icons/bi'
function NavBar({ toggleMenu}) {
  
  
  return (
    <>
    
      <nav className='nav-dashboard'>
        {/* <Link to='/signup'>Signup</Link> */}
        <div className="nav-icons mx-3 d-flex justify-content-between px-1 align-items-center gap-3">
          <BiMenuAltLeft size={30} className="menu" onClick={toggleMenu} />
        <Link to='/for-partners'> <button className="btn btn-success btn-partner">Partners</button> </Link>

        <Link to='/signin'> <button className="btn btn-success ">Sign In</button> </Link>
          {/* <RiWallet2Fill color="#556080" className="wal" size={35}/>
          <BsFillBellFill color="#556080" className="wal"  size={35}/>
          <div className="avatar">
            <img
            width={40}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png"
              alt=""
            />
          </div> */}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
