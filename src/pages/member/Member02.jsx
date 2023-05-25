import Member_nav from "./Member_nav";
import LN_pic from "./LN_pic";
import { Routes, Route, NavLink } from "react-router-dom";
import MenuIcon from "../MenuIcon";

function Member02(params) {
  return (
    <>
      <style>
        {`
          html, body {
            background-color: #F3F6F4;
          }
        `}
      </style>
      <div className="container">
        <div className="head_nav" style={{ display: "flex" }}>
          <div className="left_side">
            <Member_nav />
          </div>
          <div
            className="title"
            style={{
              color: "#3C8350",
              width: "100vw",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            <h1>MEMBER</h1>
          </div>
          <div className="menuIcon" style={{margin: "20px 20px 0px 0px"}}>
            <MenuIcon />
          </div>
        </div>
        <LN_pic />
        <div className="member_part" style={mem_part}>
          <div className="left_side" style={left_side}>
            <nav className="mem_links" style={mem_links}>
              <NavLink
                className="nav"
                to={"/Member01"}
                style={{
                  textDecoration: "none",
                  marginBottom: "5px",
                  color: "black",
                }}
              >
                Jay B
              </NavLink>
              <NavLink
                className="nav"
                to={"/Member02"}
                style={{
                  textDecoration: "none",
                  marginBottom: "5px",
                  color: "#3C8350",
                  fontWeight: "bold",
                }}
              >
                Mark
              </NavLink>
              <NavLink
                className="nav"
                to={"/Member03"}
                style={{
                  textDecoration: "none",
                  marginBottom: "5px",
                  color: "black",
                }}
              >
                Jackson
              </NavLink>
              <NavLink
                className="nav"
                to={"/Member04"}
                style={{
                  textDecoration: "none",
                  marginBottom: "5px",
                  color: "black",
                }}
              >
                Jinyoung
              </NavLink>
              <NavLink
                className="nav"
                to={"/Member05"}
                style={{
                  textDecoration: "none",
                  marginBottom: "5px",
                  color: "black",
                }}
              >
                Youngjae
              </NavLink>
              <NavLink
                className="nav"
                to={"/Member06"}
                style={{
                  textDecoration: "none",
                  marginBottom: "5px",
                  color: "black",
                }}
              >
                BamBam
              </NavLink>
              <NavLink
                className="nav"
                to={"/Member07"}
                style={{
                  textDecoration: "none",
                  marginBottom: "5px",
                  color: "black",
                }}
              >
                Yugyeom
              </NavLink>
            </nav>
            <div className="mem_info" style={mem_info}>
              <h1 style={{ marginTop: "0px", color: "#3C8350" }}>
                Mark | 마크
              </h1>
              <h3 style={{ marginTop: "-15px", fontWeight: "400" }}>
                Mark Yi En Tuan
              </h3>
              <h3 style={{ marginTop: "-15px", fontWeight: "400" }}>
                September 4, 1993
              </h3>
            </div>
          </div>

          <div className="mem_pic">
            <img
              src="https://res.theconcert.com/c_thumb/b58d9bcb922a0d7143f19b847c0d2a320/mt.jpg"
              alt="MARK"
              style={mem_pic}
            ></img>
          </div>

          <div className="mem_social" style={social_link}>
            <div className="social-link">
              <a
                href="https://www.facebook.com/GOT7Official/"
                target="_blank"
                rel="facebook"
              >
                <i className="icon" style={a_icon}>
                  <img
                    className="facebook"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                    style={icon}
                    alt="facebook"
                  ></img>
                </i>
              </a>
              <a
                href="https://twitter.com/marktuan"
                target="_blank"
                rel="twitter"
              >
                <i className="icon" style={a_icon}>
                  <img
                    className="twitter"
                    src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
                    alt="twitter"
                    style={icon}
                  ></img>
                </i>
              </a>
              <a
                href="https://www.instagram.com/marktuan/"
                target="_blank"
                rel="instagram"
              >
                <i className="icon" style={a_icon}>
                  <img
                    className="instagram"
                    src="https://toppng.com/uploads/preview/instagram-logo-circle-11549679754rhbcorxntv.png"
                    alt="instagram"
                    style={ex_icon}
                  ></img>
                </i>
              </a>
              <a
                href="https://youtube.com/@GOT7_isourname"
                target="_blank"
                rel="youtube"
              >
                <i className="icon" style={a_icon}>
                  <img
                    className="youtube"
                    src="https://www.pngitem.com/pimgs/m/11-114700_youtube-red-circle-youtube-circle-icon-png-transparent.png"
                    alt="youtube"
                    style={ex_icon}
                  ></img>
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Member02;

const mem_links = {
  display: "flex",
  flexDirection: "column",
  textDecoration: "none",
  textAlign: "right",
  marginBottom: "180px",
};

const mem_pic = {
  width: "280px",
  height: "435px",
  objectFit: "cover",
  borderRadius: "20px",
};

const mem_part = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "80px",
};

const left_side = {
  display: "flex",
  flexDirection: "column",
  marginRight: "25px",
};

const mem_info = {
  textAlign: "right",
  marginBottom: "-20px",
};

const icon = {
  width: "25px",
  height: "25px",
};

const ex_icon = {
  width: "25px",
  height: "25px",
  borderRadius: "360rem",
};

const a_icon = {
  display: "flex",
  flexDirection: "column",
  margin: "10px",
};

const social_link = {
  marginLeft: "20px",
  marginTop: "-300px",
};
