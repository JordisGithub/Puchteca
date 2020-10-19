import React from 'react';
import "./ContactUsPage.css"
import contactImage from "../../../Assets/bannerImages/img-contact-us.png";

import BannerComponent from '../../Global/BannerComponent/Banner';
import NebulaAddress from '../../../Assets/img-nebula-address.png';
import facebook from '../../../Assets/contactPageImages/fb-icon.svg';
import linkedin from '../../../Assets/contactPageImages/linkedin-icon.svg';
import instagram from '../../../Assets/contactPageImages/instagram-icon.svg';
import twitter from '../../../Assets/contactPageImages/twitter-icon.svg';
import youtube from '../../../Assets/contactPageImages/youtube-icon.svg';



 const bannerInfo = {
   bannerTitle: "Contact Us",
   backgroundImage: contactImage,

 }

 const breadText = ["Home","About Us","Contact Us"];


class ContactUsPage extends React.Component{
    render(){
        return (
          <div className = "ContactUsPageContainer">
            
              <BannerComponent className = "bannerContainer" info = {bannerInfo} breadCrumbText = {breadText}/>
        <div className = "contactPageLRContainer">
            <div className = "contactPageLeft">
              <form>
                <div className="outer-div">
                  <div className="inner-div">
                  <label>Name*</label>
                  <input className = "name" type = "text"/>
                  </div>

                <div className="inner-div">
                  <label className = "marginLeft">Email*</label>               
                  <input className = "email" type = "text"/> 
                  </div>
                </div>   
                <label>Company*</label>
                  <input className = "company" type = "text"/>
                <label>Message*</label>
                  <input className = "message" type = "textArea"/>

                  <button className = "submitButton">SUBMIT</button>
               </form>

            </div>
            <div className = "contactPageRight">
              <img className="NebullaMap" src={NebulaAddress} alt="" />
              <div className = "contactPageRightBottom">
                <div className = "addressPhoneContainer">
                  <div className = "addressContainer">
                    <p className = "contactPageText"><b>Address:</b></p>
                    <p className = "contactPageText">180 Michael Drive Syosset, NY 11791</p>
                  </div>
                  <div className = "phoneNumberContainer">
                    <p className = "contactPageText"><b>Phone Number:</b></p>
                    <p className = "contactPageText">631-468-7475</p>
                  </div>
                </div>
                <p className = "contactPageText marginTop68"><b>Connect with Us!</b></p>
                <div className = "contactPageRightIconContainer">
                  <img className="contactPageLogo" src={facebook} alt="" />
                  <img className="contactPageLogo" src={instagram} alt="" />
                  <img className="contactPageLogo" src={linkedin} alt="" />
                  <img className="contactPageLogo" src={twitter} alt="" />
                  <img className="contactPageLogo" src={youtube} alt="" />


                </div>
              </div>
            </div>
            
            {/* <h1 style={{textAlign:"center"}}>
              Contact Us
            </h1> */}
            
            
          </div>
        </div>
        )
    }

}
export default ContactUsPage;
