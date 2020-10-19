import React from "react";

import "./OurTeamPage.css";

import Banner from "../../../Global/BannerComponent/Banner";
import OurTeamPageImage from "../../../../Assets/bannerImages/OurTeamBanner.png";
import NameTitleCard from "../../../Global/NameTitleCard/NameTitleCard";

const breadText = ["Home", "About Us", "Advisory Team"];

const bannerInfo = {
  bannerTitle: "Our Team",
  backgroundImage: OurTeamPageImage,
};

function Team() {
  return (
    <div>
      <Banner info={bannerInfo} breadCrumbText={breadText} />
      <div
        style={{
          display: "flex",
          maxWidth: "100vw",
          flexWrap: "wrap",
          margin: "30px 0px 30px 0px",
          justifyContent: "space-around",
        }}
      >
        <div className="ourteam-container">
          <div className="titles">
            <div className="team-name">
              <h5>ADVISORY</h5>
              <div className="purpleRect-ourteam"></div>
            </div>
            <div className="team-name">
              <h5>COMMUNITY AMBASSADORS</h5>
              <div className="purpleRect-ourteam"></div>
            </div>
            <div className="team-name">
              <h5>BUSINESS &amp; SALES FORCE</h5>
              <div className="purpleRect-ourteam"></div>
            </div>
            <div className="team-name">
              <h5>TECH</h5>
              <div className="purpleRect-ourteam"></div>
            </div>
          </div>
          <div className="name-cards">
            <NameTitleCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
