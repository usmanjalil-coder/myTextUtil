import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    // <nav  className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <nav style={{backgroundColor: props.mode === 'dark'? 'rgb(3 21 40)' : 'white', borderBottom: props.mode === 'dark'? 'none':'1px solid black'}}  className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a style={{color: props.mode === 'dark'? 'white' : 'black'}} className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button" style={{backgroundColor: props.mode === 'dark'? 'white' : '#0d6efd'}}
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span style={{backgroundColor: props.mode === 'dark'? 'cornflowerblue' : 'white'}} className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a style={{color: props.mode === 'dark'? 'white' : 'black'}} className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              {/* <Link style={{color: props.mode === 'dark'? 'white' : 'black'}} className="nav-link" to="/about">
                {props.aboutText}
              </Link> */}
            </li>
          </ul>
          <form className="d-flex">
            {/* <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button> */}
            <div className={`form-check form-switch text-${props.mode === 'light'? 'dark': 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btnMode}</label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.prototype = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Title",
  aboutText: "About",
};
