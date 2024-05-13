import React, { useState } from "react";
import "./Navbar.css";
import logo from "./smaash-logo.webp";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="blueGrad w-100">
      <div className="m-0 navbar row d-flex justify-content-between align-items-center">
        <div className="d-flex col" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="white"
            className="bi bi-list"
            viewBox="0 0 16 16"
            role="button"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            style={{ cursor: "pointer", marginRight: "10px" }}
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </div>
        <div className="col d-flex justify-content-center">
          <img src={logo} alt="logo" style={{ height: "45px" }} />
        </div>
        <div className="col d-flex justify-content-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            fill="white"
            className="bi bi-person"
            viewBox="0 0 16 16"
            style={{ marginRight: "10px" }}
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            fill="white"
            className="bi bi-cart2"
            viewBox="0 0 16 16"
          >
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
          </svg>
        </div>
      </div>
      <div className={`col collapse ${menuOpen ? "show" : ""}`} id="menu">
        <div className="d-flex justify-content-center">
          <ul className="navbar-nav mt-3">
            <li className="nav-item d-flex justify-content-center">
              <p className="text-light">Bowling</p>
            </li>
            <li className="nav-item d-flex justify-content-center">
              <p className="text-light">Offers</p>
            </li>
            <li className="nav-item d-flex justify-content-center">
              <p className="text-light">About Us</p>
            </li>
            <li className="nav-item d-flex justify-content-center">
              <p className="text-light">Contact Us</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
