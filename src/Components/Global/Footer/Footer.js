import React from 'react';
import "./Footer.css";
import fb_icon from '../../../Assets/fb-icon.svg';
import global_giving from '../../../Assets/global-giving.svg';
import instagram from '../../../Assets/instagram-icon.svg';
import linkedin from '../../../Assets/linkedin-icon.svg';
import nebula from '../../../Assets/nebula-academy.svg';
import transpar from '../../../Assets/seal-of-trans.svg';
import twitter from '../../../Assets/twitter-icon.svg';
import youtube from '../../../Assets/youtube-icon.svg';
// import dots from '../../../Assets/Vector22.svg';   



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
            <li><a href="/" className="anchorLooks">Blog</a></li>
          </ul>
        </div>
        {/* {Column 2} */}
        <div className="col">
          <h3> Programs</h3>
          <ul className="list-unstyled">
            <li><a href="/" className="anchorLooks">Coding Programs</a></li>
            <li><a href="/" className="anchorLooks">Code-a-Thon</a></li>
            <li><a href="/" className="anchorLooks">Build a PC</a></li>
            <li><a href="/" className="anchorLooks">Creating STEAM</a></li>
          </ul>
        </div>
        {/* {Column 3} */}

        <div>
          <h3>News</h3>

          <ul>
          </ul>
        </div>
        {/* {Column 4} */}
        <div className="col">
          <h3> Support Us</h3>
          <ul className="list-unstyled">

            <li><a href="/supportUs/sponsor" className="anchorLooks">Become a Sponsor</a></li>

            <li><a href="/" className="anchorLooks">Volunteer</a></li>
            <li><a href="/" className="anchorLooks">Donate</a></li>
          </ul>
        </div>
        {/* {Column 5} */}
        <div className="col">
          <h3> Contact Us</h3>
          <ul className="list-unstyled">
            <li>We Connect The Dots</li>
            <li> <></> 631-468-7477</li>
            <li>succeed@nebulaacademyny.org</li>
            <li>180 Micheal Drive Syosset, NY 11791</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-container">

        <div className="styles">
          <p className="bottom-container-text">We Connect The Dots, Inc. is a
                501(c)(3) not-for-profit organization.</p>
        </div>
        <div className="styles">
          <a href="/"> <img className="footer-nebula-logo" src={transpar} width={100} /></a>
          <a href="/"> <img className="footer-nebula-logo" src={global_giving} width={100} /></a>
          <a href="/">  <img className="footer-nebula-logo" src={nebula} width={100} /></a>
        </div>
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