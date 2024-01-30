
import {
  faBars,
  faCircleQuestion,
  faPowerOff,
  faPuzzlePiece,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);  
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="logo"
          width={70}
        />
        <h3>STATBOARD</h3>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li
            className={activeMenu === "Dashboard" ? "active" : ""}
            onClick={() => handleMenuClick("Dashboard")}
          >
            <FontAwesomeIcon icon={faBars} style={{ color: "#00c3d0" }} />
            Dashboard
          </li>
          <li
            className={activeMenu === "Analytics" ? "active" : ""}
            onClick={() => handleMenuClick("Analytics")}
          >
            <FontAwesomeIcon icon={faWrench} style={{ color: "blue" }} />{" "}
            Support
          </li>
          <li
            className={activeMenu === "Reports" ? "active" : ""}
            onClick={() => handleMenuClick("Reports")}
          >
            <FontAwesomeIcon icon={faPuzzlePiece} style={{ color: "lightblue" }} />{" "}
            Pluggins
          </li>
          <li
            style={{ paddingLeft: "0px" }}
            className={activeMenu === "Settings" ? "active" : ""}
            onClick={() => handleMenuClick("Settings")}
          >
            <FontAwesomeIcon
              icon={faCircleQuestion}
              style={{ color: "violet", marginRight: "10px" }}
            />
            Help
          </li>
        </ul>
      </div>
      <div className="sidebar-footer">
        <button>Logout <FontAwesomeIcon icon={faPowerOff}/></button>
      </div>
    </div>
  );
};

export default Sidebar;
