import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}
    >
      <Link className="navbar-brand mx-6" to="">
        {props.title}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="/navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <ul className="nav-item">
            <Link className="nav-link" to="">
              Home <span className="sr-only">(current)</span>
            </Link>
           
          
        </ul> 
        <ul> <Link className="nav-link" to="/About">
              About Us <span className="sr-only">(current)</span>
            </Link></ul>
        </ul>
        
        
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0 mx-2"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>

      <div className="d-flex">
        <div className="btn-primary mx-1 rounded" style={{width:'30px' , height:'30px', cursor:'pointer'}} onClick={()=>{props.toglemode('primary')}}></div>
        <div className="btn-danger mx-1 rounded" style={{width:'30px' , height:'30px', cursor:'pointer'}}onClick={()=>{props.toglemode('danger')}}></div>
        <div className="btn-success mx-1 rounded" style={{width:'30px' , height:'30px', cursor:'pointer'}}onClick={()=>{props.toglemode('success')}}></div>
        <div className="btn-warning  mx-1 rounded" style={{width:'30px' , height:'30px', cursor:'pointer'}}onClick={()=>{props.toglemode('warning')}}></div>
        <div className="btn-dark  mx-1 rounded" style={{width:'30px' , height:'30px', cursor:'pointer'}}onClick={()=>{props.toglemode('dark')}}></div>
        <div className="btn-light  mx-1 rounded" style={{width:'30px' , height:'30px', cursor:'pointer'}}onClick={()=>{props.toglemode('light')}}></div>
      </div>

      {/* <div className="form-check my-2 form-switch">
       <span className={`mx-3  form-check-label text-${
            props.mode === "dark" ? "light" : "dark"
          }`}> <b>{props.switchtext}</b></span>
         <label
          className={`form-check-label switch text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
          forhtml="customSwitch1"
        >
          
         <input
          type="checkbox"
          className="form-check-input switch"
          id="customSwitch1"
          onClick={()=>{props.toglemode(null)}}
        />
        <span className="slider round"></span>
        </label>
      </div> */}

      {/* <div className="form-check form-switch">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div> */}
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  contactUs: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Set Title Here",
  contactUs: "Set Contact Us Here",
};
