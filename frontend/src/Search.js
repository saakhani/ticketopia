
import React from "react";
import "./Search.css";
import "./images.js";
import images from "./images.js";
import UserInputBox from "./UserInputBox.js";


  
function Search(){
  return (
    <div className="search-simple">
      <div className="div">
        <div className="group">
          <img className="ticketopia" alt="Ticketopia" src= {images.logo_hor}/>
          {/* <img className="img" alt="Ticketopia" src={logo} /> */}
        </div>
        <div className="text-wrapper">welcome!</div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            {/* <div className="text-wrapper-2">search for an event</div>               */}
            <div className="search-box">
              <UserInputBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};  

export default Search;