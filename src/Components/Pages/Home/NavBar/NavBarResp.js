import { React, useEffect } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FaGem, FaHeart } from "react-icons/fa";
import "react-pro-sidebar/dist/css/styles.css";
import "./NavBarResp.css";
import { Link } from "react-router-dom";

function NavBarResp() {
  return (
    <div className="NavBarResp-container">
      <div className="NavBarResp">
        <div className="NavBarResp-item">
          <Link to="/homeResp" className="navRespLink">
            Vai ai quiz
          </Link>
        </div>
        <div className="NavBarResp-item">
          <Link to="/r" className="navRespLink">
            DashBoard
          </Link>
        </div>
        <div className="NavBarResp-item">
          <Link to="/login" className="navRespLink">
            Accedi
          </Link>
        </div>
        <div className="NavBarResp-item">
          <Link to="/about" className="navRespLink">
            Chi siamo
          </Link>
        </div>
        <div className="NavBarResp-item">
          <Link to="/questions" className="navRespLink">
            Consiglia nuove domande
          </Link>
        </div>
        <div className="NavBarResp-item">
          <Link to="/contact-us" className="navRespLink">
            Contattaci
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBarResp;
