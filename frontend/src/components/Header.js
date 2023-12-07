import React from "react";
import images from "../assets/Images.js";
import "../styles/components/Header.css";

import SearchBoxStatic from "./SearchBoxStatic.js";

function Header({inputQueryHeader}) {

    const handleLogin = () => {
        alert("not yet available")
    };

    console.log(inputQueryHeader);

    return(
        <div className="header">
            <div className="logo">
                <button className="logo-button" onClick={() => window.location.href = '/'}>
                    <img src={images.logo_symbol} alt="Logo" />
                </button>
            </div>
            <div className="search-box-static">
                <SearchBoxStatic inputQuery= {inputQueryHeader}/>
            </div>
            <button className="login-button-header" onClick = {handleLogin}>
                login
            </button>
        </div>
    )
    
}


export default Header;
