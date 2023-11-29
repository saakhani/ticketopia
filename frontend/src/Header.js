import React from "react";
import images from "./images.js";
import "./Header.css";

import SearchBoxStatic from "./SearchBoxStatic.js";

const Header = () => {

    const handleLogin = () => {
        alert("not yet available")
    };

    return(
        <div className="header">
            <div className="logo">
                <img src={images.logo_symbol} alt="Logo" />
            </div>
            <div className="search-box-static">
                <SearchBoxStatic />
            </div>
            <button className="login-button-header" onClick = {handleLogin}>
                login
            </button>
        </div>
    )

}

export default Header;
