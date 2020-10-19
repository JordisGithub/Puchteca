import React, {Fragment} from 'react';
import './NewsSnippetCard.css';
import newssnippetimage1 from "../../../Assets/NewsPageImages/newssnippetimage1.png"
import purplearrow from "../../../Assets/purplearrow.png";
function NewsSnippetCard() {
     
    return (
        <Fragment>

            <div className="newssnippetcontainer">
            
            
               
            
               <img className="newssnippetimage"src={newssnippetimage1}alt="students in a classroom"/>
          
                  <div className="newssnippettextcontainer">
                  <p><h4  className="newssnippettitle">Stories from 2019 Code-A-Thon</h4>Students invest in their future by spending their weekend learning invaluable technology skills with the support of Microsoft and our host partners.</p>
                  <p className="purplecolor">READ STORY  <img src={purplearrow}alt="students in a classroom"/></p>
                </div>
            </div>
            
           
            
        </Fragment>
            
    );
    }

export default NewsSnippetCard;