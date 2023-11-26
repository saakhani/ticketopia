import React from "react";

function Search() {
  return (
    <div className="wireframe">
      <div className="top-bar">
        <div className="rectangle" />
        <div className="title">Events</div>
        <div className="navigation">
          <div className="tab">Home</div>
          <div className="tab">Events</div>
          <div className="tab">Profile</div>
          <div className="textfield">
            <div className="text">Search in site</div>
            <img className="ic-search" alt="Ic search" src="ic-search.svg" />
          </div>
        </div>
      </div>
      <div className="overlap-group">
        <div className="section">
          <div className="container">
            <p className="text-wrapper">Find and book your favorite events!</p>
            <div className="input">
              <input className="div" placeholder="Search" type="text" />
            </div>
            <div className="button">
              <div className="seconday">
                <div className="title-2">Filter</div>
              </div>
              <div className="primary">
                <div className="title-3">Search</div>
              </div>
            </div>
          </div>
          <img className="vector" alt="Vector" src="vector-200.svg" />
        </div>
        <div className="section-2">
          <div className="container-2">
            <div className="text-wrapper">Featured Events</div>
            <p className="description">Check out these popular events</p>
          </div>
          <div className="list">
            <div className="card">
              <div className="image-container">
                <div className="image">
                  <div className="title-4">Event Image</div>
                  <div className="tag">
                    <div className="text-2">Limited Seats</div>
                  </div>
                </div>
              </div>
              <div className="text-content">
                <div className="title-5">Music Concert</div>
                <div className="subtitle">10th June, 2022</div>
                <div className="icon-buttons">
                  <div className="icon">😃</div>
                  <div className="icon">🎟️</div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="image-container">
                <div className="image">
                  <div className="title-4">Event Image</div>
                  <div className="tag">
                    <div className="text-2">Limited Seats</div>
                  </div>
                </div>
              </div>
              <div className="text-content">
                <div className="title-5">Music Concert</div>
                <div className="subtitle">10th June, 2022</div>
                <div className="icon-buttons">
                  <div className="icon">😃</div>
                  <div className="icon">🎟️</div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="image-container">
                <div className="image">
                  <div className="title-4">Event Image</div>
                  <div className="tag">
                    <div className="text-2">Sold Out</div>
                  </div>
                </div>
              </div>
              <div className="text-content">
                <div className="title-5">Comedy Show</div>
                <div className="subtitle">8th July, 2022</div>
                <div className="icon-buttons">
                  <div className="icon">😃</div>
                  <div className="icon">🎟️</div>
                </div>
              </div>
            </div>
          </div>
          <img className="img" alt="Vector" src="image.svg" />
        </div>
      </div>
    </div>
  );
};

export default Search;