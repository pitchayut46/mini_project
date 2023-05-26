import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Navbar from "../pages/Navbar";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    console.log("Email:", email);
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Confirm Password:", ConfirmPassword);
  };

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handleConfirmPasswordChange(e) {
    setConfirmPassword(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <>
      <style>
        {`
      @media screen and (max-width: 600px) {
        .all-component {
          display: flex;
          flex-direction: column;
        }

        .login-form{
          display: flex;
          flex-direction: column;
          background-color: white;
          width: 10px;
          height: 11px;
          border-radius: 3%;
          box-shadow: 1px 1px 20px 0px #d1d1d1; 
          margin-left: 20px;
          align-items: center;
        }

        .text{
          color: #3C8350;
          display: flex;
          flex-direction: column;
          margin-top: 180px;
        }

        .text-en{
          display: flex;
          font-size: 20px !important;
          justify-content: center !important;
          
        }

        .text-kr{
          display: flex;
          justify-content: center !important;
          font-size: 14px !important;
          margin-bottom: 30px !important;
          margin-left: 0px !important;
        }

        .child{
          display: inline-block;
          vertical-align: middle;
          margin-top: -80px;
        }

        .form-group{
          display: flex;
          flex-direction: column;
          margin: 20px;
        }
      
        .input-fill input{
          width: 250px !important;
          height: 28px;
          /* margin-left: 20px; */
          border-radius: 5px;
          border: 1.5px solid #959595;
        }
      
        .label{
          margin-bottom: 10px;
          /* margin-left: 20px; */
          color:#3C8350;
        }
      
        .login-form{
          display: flex;
          flex-direction: column;
          background-color: white;
          width: 90% !important;
          border-radius: 3%;
          box-shadow: 1px 1px 20px 0px #d1d1d1; 
          margin-left: 20px;
          align-items: center;
          margin-top: 80px;
        }

        .agreement{
          font-size: 12px;
          color: #959595;
          width: 80% !important;
          text-align: center;
          margin-top: 10px;
        }
      }

      body{
        background-color: #F3F6F4;
      }
    
      .all-component {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70vh;
      }
      
      .form-group{
        display: flex;
        flex-direction: column;
        margin: 20px;
      }
    
      .input-fill input{
        width: 300px;
        height: 28px;
        /* margin-left: 20px; */
        border-radius: 5px;
        border: 1.5px solid #959595;
      }
    
      .label{
        margin-bottom: 10px;
        /* margin-left: 20px; */
        color:#3C8350;
      }
    
      .login-form{
        display: flex;
        flex-direction: column;
        background-color: white;
        width: 400px;
        height: 500px;
        border-radius: 3%;
        box-shadow: 1px 1px 20px 0px #d1d1d1; 
        margin-left: 20px;
        align-items: center;
        margin-top: 80px;
      }
    
      .child{
        display: inline-block;
        vertical-align: middle;  
      }
    
      .text{
        color: #3C8350;
        display: flex;
        flex-direction: column;
      }
    
      .text-en{
        display: flex;
        font-size: 36px;
        margin-top: -70px;
        justify-content: right;
      }
    
      .text-kr{
        display: flex;
        justify-content: right;
        margin-left: 170px;
      }
    
      .color-nav{
        background-color: #3C8350;
        opacity: 1;
        box-shadow: 0px 1px 30px 20px #d5d5d5;
      }
    
      .signUp-btn{
        background-color: #3C8350;
        width: 100px;
        color: rgb(255, 255, 255);
        font-weight: bold;
        font-size: 14px;
        border: none;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 10px;

      }
    
      .agreement{
        font-size: 12px;
        color: #959595;
        width: 300px;
        align-items: center;
      }

      .button-signUp {
        display: flex;
        justify-content: center;
      }
    `}
      </style>
      <div className="color-nav">
        <Navbar />
      </div>
      <div className="all-component">
        <div className="child">
          <div className="text">
            <div className="text-kr">
              <h1>갓세븐</h1>
            </div>
            <div className="text-en">
              <h1>GOT7</h1>
            </div>
          </div>
        </div>
        <div className="child">
          <div className="login-form">
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="label" style={{ marginTop: "30px" }}>
                  <label htmlFor="Username">Username</label>
                </div>
                <div className="input-fill">
                  <input
                    type="text"
                    className="form-control"
                    id="Username"
                    name="username"
                    placeholder=""
                    value={username}
                    onChange={handleUsernameChange}
                    required
                    autoComplete="username"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="label">
                  <label htmlFor="Email">Email</label>
                </div>
                <div className="input-fill">
                  <input
                    type="email"
                    id="Email"
                    name="email"
                    placeholder=""
                    pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="label">
                  <label htmlFor="Password">Password</label>
                </div>
                <div className="input-fill">
                  <input
                    type="text"
                    className="form-control"
                    id="Password"
                    name="password"
                    placeholder=""
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    autoComplete="password"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="label">
                  <label htmlFor="ConfirmPassword">Confirm Password</label>
                </div>
                <div className="input-fill">
                  <input
                    type="text"
                    className="form-control"
                    id="ConfirmPassword"
                    name="ConfirmPassword"
                    placeholder=""
                    value={ConfirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                    autoComplete="password"
                  />
                </div>
              </div>
              <div className="button-signUp">
                <button type="submit" className="signUp-btn" value="Submit">
                  Sign Up
                </button>
              </div>
            </form>
            <div className="agreement">
              <p>
                By signing up, you agree to our Terms , Privacy Policy and
                Cookies Policy.
              </p>
            </div>
          </div>
          <div className="optional">
            <a
              href="/login"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "12px",
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
                fontSize: "16px",
              }}
            >
              Have an account?{" "}
              <span
                className="log-in-word"
                style={{ color: "#3C8350", fontWeight: "bold" }}
              >
                {" "}
                &nbsp;LOG IN
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
