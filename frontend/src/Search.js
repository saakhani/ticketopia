
import React from "react";
import "./Search.css";
import logo from "./ticketopia.svg";
import search from "./Search.svg";
  
function Search(){
  return (
    <div className="search-simple">
      <div className="div">
        <div className="group">
          <img className="ticketopia" alt="Ticketopia" src={logo} />
          {/* <img className="img" alt="Ticketopia" src={logo} /> */}
        </div>
        <div className="text-wrapper">welcome!</div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <div className="text-wrapper-2">search for an event</div>              
            <img className="search" alt="Search" src={search} />
          </div>
        </div>
      </div>
    </div>
  );
};  

export default Search;