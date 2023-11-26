import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import "./style.css";

const Wireframe = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="wireframe">
      <div className="div">
        <form onSubmit={handleSubmit}>
          <div className="text-wrapper">CREATE ACCOUNT</div>
          <div className="group">
            <div className="overlap-group">
              <div className="input">
                <div className="title">Password</div>
                <div className="textfield">
                  <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <div className="input-2">
                <div className="title">Last Name</div>
                <div className="textfield">
                  <input
                    type="text"
                    value={lastName}
                    onChange={handleLastNameChange}
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <div className="input-3">
                <div className="title">Email</div>
                <div className="textfield">
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="input-4">
                <div className="title-2">First Name</div>
                <div className="textfield">
                  <input
                    type="text"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    placeholder="Enter your first name"
                  />
                </div>
              </div>
              <button type="submit" className="primary">
                Sign Up
              </button>
            </div>
          </div>
        </form>
        <div className="section-wrapper">
        <div className="section">
            <div className="container">
              <div className="title-4">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;©
                2023
              </div>
              <div className="title-5">Privacy Policy</div>
              <div className="title-6">Terms of Service</div>
            </div>
          </div>
        </div>
        <div className="top-bar">
        <div className="rectangle" />
          <div className="title-7">MovieFlix</div>
          <div className="navigation">
            <div className="tab">Home</div>
            <div className="tab">Profile</div>
            <div className="textfield-2">
              <div className="text-3">Search in site</div>
              <img className="ic-search" alt="Ic search" src="ic-search.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wireframe;














