import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faWallet,
  faCoins,
  faQuestionCircle,
  faCog,
  faUsersCog,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const NavMenu = (props) => {
  const navStatus = {
    right: props.open ? "0" : "-50vw",
  };

  return (
    <div className="nav-menu" style={navStatus}>
      <FontAwesomeIcon
        icon={faTimes}
        className="nav-menu-icon-close"
        onClick={() => props.setOpen(false)}
      />
      <ul>
        <NavLink to="/" className="nav-link">
          <li>
            <div>
              <FontAwesomeIcon icon={faHome} className="nav-menu-icon" />
            </div>
            Home
          </li>
        </NavLink>
        <NavLink to="/portfolio" className="nav-link">
          <li>
            <div>
              <FontAwesomeIcon icon={faWallet} className="nav-menu-icon" />
            </div>
            Wallet
          </li>
        </NavLink>
        <NavLink to="/currencies" className="nav-link">
          <li>
            <div>
              <FontAwesomeIcon icon={faCoins} className="nav-menu-icon" />
            </div>
            Currencies
          </li>
        </NavLink>
        <NavLink to="/about" className="nav-link">
          <li>
            <div>
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="nav-menu-icon"
              />
            </div>
            About
          </li>
        </NavLink>
      </ul>
      <ul>
        <NavLink to="/about" className="nav-link">
          <li>
            <div>
              <FontAwesomeIcon icon={faCog} className="nav-menu-icon" />
            </div>
            <p>Settings</p>
          </li>
        </NavLink>
        <NavLink to="/about" className="nav-link">
          <li>
            <div>
              <FontAwesomeIcon icon={faUsersCog} className="nav-menu-icon" />
            </div>
            Support
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default NavMenu;
