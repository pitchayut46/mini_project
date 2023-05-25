import Social_inline from "./Social_inline";
import logo from "../assets/Got7_2022_logo.png";
import React, { useState } from "react";
import MenuIcon from "./MenuIcon";

function Discography(params) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverExit = () => {
    setIsHovered(false);
  };

  return (
    <>
      <style>
        {`
          html, body {
            background-color: #F3F6F4;
          }
        
        .hovered-vdo {
          background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url("https://64.media.tumblr.com/9eaa9c7f490bb019d1bc31ed6e564f7b/7c267b20b21ac5fb-63/s540x810/9b3111e4d6510b659275737f0f53dcdcf9600231.gif");
          background-size: cover;
          background-repeat: no-repeat;
          object-fit: cover;
        }

        @media (max-width: 576px) {
            .head-logo{
                display: flex;
                flex-direction: column;
            }

            .app{
                display: flex;
                flex-direction: column;
            }
        `}
      </style>

      <div
        className="head-logo"
        style={{
          display: "flex",
          height: "60px",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <Social_inline />
        <div className="logo-con">
          <img src={logo} style={{ height: "60px", marginLeft:"-110px", marginTop:"50px" }}></img>
        </div>
        <div className="menu-icon-container" style={{margin:"30px 20px 0px 0px"}}>
          <MenuIcon />
        </div>
      </div>
      <div className="app">
        <div className="disc-heading">
          <h1
            style={{
              textAlign: "center",
              marginTop: "60px",
              color: "#3C8350",
              fontSize: "38px",
            }}
          >
            DISCOGRAPHY
          </h1>
        </div>
        <div
          className="disc-body"
          style={{
            backgroundColor: "white",
            width: "80%",
            height: "auto",
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
            flexWrap: "wrap",
            padding: "20px",
          }}
        >
          <div className="disc-show-pop" style={disc_pop}>
            <div className="album-container">
              <div className="album-01" style={album_part}>
                <div className="album-cover">
                  <img
                    src="https://blogger.googleusercontent.com/img/a/AVvXsEh9oMSuhEV74m2MwTvFV7z_EJ8fjZQLgAIlSdEjX4meg8U6aVCv7SvDihAjja7PEOFDK4DEG23GtH1V437Q2zISv5X9oYt8PrUdw1B5uAIsuczI4ZgM8j24vPNAW-lPg4G96v9SoN4UkHL0YdBl1joNRVt1EqDuXCEsShTPirVJYOioqUeihUXXhZOG"
                    alt="got7isourname"
                    style={album_cover}
                  ></img>
                </div>
                <div className="name-album">
                  <h4>GOT7 IS OUR NAME</h4>
                </div>
              </div>
            </div>
            <div className="album-container">
              <div className="album-02" style={album_part}>
                <div className="album-cover">
                  <img
                    src="https://inwfile.com/s-l/3azqfp.jpg"
                    alt="got7tuburrence"
                    style={album_cover}
                  ></img>
                </div>
                <div className="name-album">
                  <h4>TURBURLENCE</h4>
                </div>
              </div>
            </div>
            <div className="album-container">
              <div className="album-03" style={album_part}>
                <div className="album-cover">
                  <img
                    src="https://4.bp.blogspot.com/-KZm3AJVUvKM/Ut3hlgp7V9I/AAAAAAAABBY/ewfAHWZRkfA/s1600/got7.jpg"
                    alt="got it?"
                    style={album_cover}
                  ></img>
                </div>
                <div className="name-album">
                  <h4>GOT IT?</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="song-suggestion">
          <div
            className="song_01"
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverExit}
          >
            {isHovered ? (
              <div
                className="hovered-vdo"
                style={{
                  display: "flex",
                  width: "80%",
                  margin: "0 auto",
                  paddingRight: "40px",
                  paddingTop: "50px",
                  paddingBottom: "50px",
                }}
              >
                <div className="vdo-player">
                  <iframe
                    width="460px"
                    height="215px"
                    src="https://www.youtube.com/embed/IZ0oQ6nzKxo?controls=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    style={{ marginLeft: "20px" }}
                  ></iframe>
                </div>
                <div
                  className="song-info"
                  style={{
                    padding: "10px",
                    marginLeft: "20px",
                    width: "80%",
                  }}
                >
                  <div
                    className="text-info"
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    <div
                      className="title"
                      style={{ width: "40%", padding: "10px" }}
                    >
                      <h1>NANANA</h1>
                      <h3>GOT7 | 갓세븐 </h3>
                    </div>
                    <div className="views">
                      <h3>10,595,469 views</h3>
                    </div>
                    <div className="released-date">
                      <h3>2022.05.23</h3>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="song_01" style={song_con}>
                <div className="vdo-cover">
                  <img
                    src="https://f.ptcdn.info/329/077/000/rc6sd8104gPH3u9k2rgd-o.jpg"
                    style={vdo_cover}
                  ></img>
                </div>
                <div
                  className="song-info"
                  style={{
                    marginLeft: "20px",
                    width: "80%",
                  }}
                >
                  <div
                    className="text-info"
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="title" style={{ width: "40%" }}>
                      <h1>NANANA</h1>
                      <h3>GOT7 | 갓세븐 </h3>
                    </div>
                    <div className="views">
                      <h3>46,536,553 views</h3>
                    </div>
                    <div className="released-date">
                      <h3>2022.05.23</h3>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="song_02" style={song_con}>
            <div className="vdo">
              <iframe
                width="187"
                height="105"
                src="https://www.youtube.com/embed/IZ1t7CwfvEc?controls=0"
                title="YouTube video player"
                frameborder="0"
              ></iframe>
            </div>
            <div
              className="song-info"
              style={{
                padding: "10px",
                marginLeft: "20px",
                width: "80%",
              }}
            >
              <div
                className="text-info"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                <div className="title" style={{ width: "40%" }}>
                  <h1>NEVER EVER</h1>
                  <h3>GOT7 | 갓세븐 </h3>
                </div>
                <div className="views">
                  <h3>203,022,792 views</h3>
                </div>
                <div className="released-date">
                  <h3>2017.03.13</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Discography;

const album_part = {
  //   margin: "10px",
  padding: "10px",
  textAlign: "center",
  backgroundColor: "white",
};

const album_cover = {
  width: "150px",
  borderRadius: "5px",
  backgroundColor: "black",
};

const disc_pop = {
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  // margin:"0px 10px 0px 10px",
};

const song_con = {
  width: "80%",
  height: "auto",
  margin: "0 auto",
  marginTop: "20px",
  padding: "20px",
  display: "flex",
};

const vdo_cover = {
  width: "187px",
  height: "105px",
};
