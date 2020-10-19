import React from 'react';
import "./Footer.css";
import fb_icon from '../../../Assets/fb-icon.svg';
import instagram from '../../../Assets/instagram-icon.svg';
import linkedin from '../../../Assets/linkedin-icon.svg';
import twitter from '../../../Assets/twitter-icon.svg';
import youtube from '../../../Assets/youtube-icon.svg';



function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-top-container">
        <div className="subscription-container">
          <h2> Stay Connected</h2>
          <p>Sign up with your email to receive news and updates.</p>
        </div>

        <div>
          <form className="subscribe">
            <input className="search" type="text"></input>
            <button className="enter">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="dots"></div>


      <div className="footer-mid-container">
        {/* {Column 1} */}
        <div className="col">
          <h3> About</h3>
          <ul className="list-unstyled">
            <li><a href="/" className="anchorLooks">About Us</a></li>
            <li><a href="/" className="anchorLooks">Our Team</a></li>
            <li><a href="/" className="anchorLooks">Navajo Tribe</a></li>
          </ul>
        </div>


        {/* {Column 3} */}
        <div className="col">
          <h3> Support Us</h3>
          <ul className="list-unstyled">
            <li><a href="/" className="anchorLooks">Donate</a></li>
            <li><a href="/" className="anchorLooks">Volunteer</a></li>
            <li><a href="/supportUs/sponsor" className="anchorLooks">Become a Sponsor</a></li>
          </ul>
        </div>
        {/* {Column 4} */}
        <div className="col">
          <h3> Contact Us</h3>
          <ul className="list-unstyled">
            <li> <></> 928-607-1637</li>
            <li>support@puchteca.org</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-container">

        <div className="styles">
          <p className="bottom-container-text">Puchteca, Inc.<br></br> is a
                501(c)(3) not-for-profit organization.</p>
        </div>
        {/* <div className="styles">
          <a href="/"> <img className="footer-nebula-logo" src={transpar} width={100} /></a>
          <a href="/"> <img className="footer-nebula-logo" src={global_giving} width={100} /></a>
          <a href="/">  <img className="footer-nebula-logo" src={nebula} width={100} /></a>
        </div> */}
        <div className="styles">
          <a href="/"> <img src={fb_icon} width={50} /></a>
          <a href="/"> <img src={instagram} width={50} /></a>
          <a href="/"> <img src={linkedin} width={50} /></a>
          <a href="/"> <img src={twitter} width={50} /></a>
          <a href="/"> <img src={youtube} width={50} /></a>
        </div>
      </div>
    </footer>
  )
}
export default Footer;