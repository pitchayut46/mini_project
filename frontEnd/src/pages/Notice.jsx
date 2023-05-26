import Social_inline from "./Social_inline";
import logo from "../assets/Got7_2022_logo.png";
import MenuIcon from "./MenuIcon";

function Notice() {
  return (
    <>
      <style>
        {`
          html, body {
            background-color: #F3F6F4;
          }

          @media (max-width: 600px) {
            .head-logo{
                display: flex;
            }

            .app{
                display: flex;
                flex-direction: column;
            }

            .notice-heading{
              margin-top: 110px
            }
            .logo-con{
              margin-top: 130px;
            }

            .notice-contianer{
              margin-top: -50px;
              width: 330px;
              margin: 0 auto;
            }

            .notice hr{
              width: 290px;
            }
          }
        `}
      </style>
      <div className="app">
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
      </div>
      <div className="notice-heading">
        <h1
          style={{
            textAlign: "center",
            marginTop: "60px",
            color: "#3C8350",
            fontSize: "38px",
          }}
        >
          NOTICE
        </h1>
      </div>
      <div
        className="notice-contianer"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="notice"
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            marginTop: "60px",
            width: "700px",
            borderRadius: "20px",
          }}
        >
          <div className="notice-con">
            <div className="notice-body-01">
              <div className="notice-head" style={styleHead}>
                <h3 style={h3}>GOT7 - Home Coming Concert</h3>
                <div className="date">
                  <p>2022-05-23</p>
                </div>
              </div>
            </div>
            <hr style={hr}></hr>
            <div className="notice-body-02">
              <div className="notice-head" style={styleHead}>
                <h3 style={h3}>GOT7 - NANANA Official MV Release</h3>
                <div className="date">
                  <p>2022-05-23</p>
                </div>
              </div>
            </div>
            <hr style={hr}></hr>
            <div className="notice-body-03">
              <div className="notice-head" style={styleHead}>
                <h3 style={h3}>Happy Birthday Jay B.</h3>
                <div className="date">
                  <p>2022-01-06</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Notice;

const styleHead = {
  marginLeft: "30px",
  marginTop: "30px",
  marginBottom: "30px",
};

const hr = {
  // width: "640px",
};

const h3 = {
  color: "#3C8350",
  marginBottom: "-5px",
};
