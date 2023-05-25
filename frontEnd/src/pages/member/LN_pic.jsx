import React from "react";
import gotnav from "../../assets/gotnav.jpg"

function Member_nav() {
  return (
    <div className="head-pic">
      <img style={head_pic_style} src={gotnav} alt="head-pic"></img>
    </div>
  );
}
export default Member_nav;

const head_pic_style = {
  width: "100vw",
  marginTop: "20px",
};
