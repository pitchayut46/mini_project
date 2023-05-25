import React from "react";
import logo from "../../assets/Got7_2022_logo.png";

function Member_nav() {
  return (
    <>
      <nav className="navbar" style={{display:"flex"}}>
        <div className="navbar-logo" style={{marginTop:"20px"}} >
          <div className="pic">
            <img className="logo7" src={logo} alt="Logo" style={navbar_logo} />
          </div>
        </div>
      </nav>
    </>
  );
}
export default Member_nav;

const navbar_logo = {
    width:"100%",
    height:"60px",
};
