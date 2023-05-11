import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { CgYoutube } from "react-icons/cg";
import { TbWorld } from "react-icons/tb";
import { TiSocialFacebook } from "react-icons/ti";
import { TfiTwitterAlt, TfiLinkedin, TfiInstagram } from "react-icons/tfi";

function PartnerFooter() {
  return (
    <>
      <footer>
        <div className="first-foot">
          <FaChevronRight color="black" size={480} className="right-arrow" />
          <h1>Let Numbers Talk! </h1>
          <small className="text-center">
            We are on a mission to empower partners and agencies across the
            country and help them reach their highest potential with the help of
            a centralised platform.
          </small>
          <h1>750+</h1>
          <h4>Agencies Onboarded</h4>
        </div>
        <div className="second-foot">
          <div className="second-first">
            <h4>Mantarav Private Limited</h4>
            <h6>
              <IoLocation /> Registered Office
            </h6>
            <p>
              Parsvnath Exotica, Section 53, Gurugram - 122 <br /> 011, Haryana,
              India
            </p>
            <h6>
              <IoLocation /> Registered Office
            </h6>
            <p>
              Parsvnath Exotica, Section 53, Gurugram - 122 <br /> 011, Haryana,
              India
            </p>
            <h6>
              {" "}
              <TbWorld /> Website:
            </h6>
            <p>www.exmyb.com</p>
            <h6>
              {" "}
              <BsTelephone /> Phone:
            </h6>
            <p>+91- 8882102246</p>
            <h6>
              <CiMail /> Mail:
            </h6>
            <p>contact@exmyb.com</p>
            <div className="icons-foot d-flex justify-content-around align-items-center">
              <TiSocialFacebook />
              <CgYoutube />
              <TfiTwitterAlt />
              <TfiLinkedin />
              <TfiInstagram />
            </div>
          </div>
          
          <div className="second-first">
            <h4>Useful links</h4>
            <h6>Home</h6>

            <h6>Careers</h6>

            <h6>Blog</h6>
            <h6> FAQs</h6>
          </div>
          <div className="second-first">
            <h4>Get Started</h4>
            <h6>Preferred Partner</h6>
            <h6>Program</h6>
          

          </div>
        </div>
        <div className="foot-footer">
          <div>
          <small>
            Copyright © 2022 Mantarav Private Limited. All Rights Reserved.
          </small>

          </div>
          <div>
          <small>
            Privacy Policy Terms & Conditons Grievance Redressal Policy
          </small>

          </div>
        </div>
      </footer>
    </>
  );
}

export default PartnerFooter;
