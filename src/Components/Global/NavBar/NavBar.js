import React from "react";
import "./NavBar.css";
import NavBarSearch from "./NavBarSearch/NavBarSearch";


function NavBar() {
  return (
    <nav>
      <a href="/"><img src="https://i.imgur.com/okqQ0pf.png" className="brand-title" alt="puchteca" /></a>
      <a href="/" className="toggle-button">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>

      <div className="navbar" >
        <div className="dropdown" id="navbar-links">
          <ul>
            <li className="navbarLi"><a href="/about" className="navbarText">About Us</a></li>
            <div className="dropdown-content">
              <a href="/about">About Us</a>
              <a href="/about/team">Our Team</a>
              <a href="/about/nebula">Sponsors</a>
            </div>
          </ul>
        </div>

        <div className="dropdown" id="navbar-links">
          <ul>

            <li className="navbarLi"><a href="/events" className="navbarText">Events</a></li>
            <div className="dropdown-content">
              <a href="/events/event1">Event 1</a>
              <a href="/events/event2">Event 2</a>
            </div>
          </ul>
        </div>


        <div className="dropdown" id="navbar-links">
          <ul>
            <li className="navbarLi"><a href="/getinvolved" className="navbarText">Get Involved</a></li>
            <div className="dropdown-content">
              <a href="/UnderConstruction">Donate</a>
              <a href="/getinvolved/volunteer/student" className="subTarget">Volunteer</a>
            </div>
          </ul>
        </div>


        <div className="dropdown" id="navbar-links">
          <ul >
            <li className="navbarLi"><a href="/ContactUs" className="navbarText">Contact</a></li>
            <div className="dropdown-content">
              <a href="/UnderConstruction">Message Us</a>
            </div>
          </ul>
        </div>

        <div className="dropdown" id="navbar-links">
          <ul >
            <li><a href="/supportUs/donate" id="donateColor">Donate</a></li>
          </ul>
          {/* <ul id="navbar-links">
          <NavBarSearch />
        </ul> */}
        </div>

      </div>
    </nav>

  );
}

export default NavBar;

