import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Navbar from "./Navbar";

function SignUp() {
  return (
    <>
    <style>
      {`
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
    
    .blank input{
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
    
    .login-btn{
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
        align-self: center;  
    }
    
    .agreement{
        font-size: 12px;
        color: #959595;
        width: 300px;
        align-items: center;
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
            <form className="form">
              <div class="form-group">
                <div className="label" style={{ marginTop: "30px" }}>
                  <label for="formGroupExampleInput">Username</label>
                </div>
                <div className="blank">
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder=""
                  />
                </div>
              </div>
              <div class="form-group">
                <div className="label">
                  <label for="formGroupExampleInput2">Email</label>
                </div>
                <div className="blank">
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput2"
                    placeholder=""
                  />
                </div>
              </div>
              <div class="form-group">
                <div className="label">
                  <label for="formGroupExampleInput2">Password</label>
                </div>
                <div className="blank">
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput2"
                    placeholder=""
                  />
                </div>
              </div>
              <div class="form-group">
                <div className="label">
                  <label for="formGroupExampleInput2">Confirm Password</label>
                </div>
                <div className="blank">
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput2"
                    placeholder=""
                  />
                </div>
              </div>
            </form>
            <div className="agreement">
              <p>
                By signing up, you agree to our Terms , Privacy Policy and
                Cookies Policy.
              </p>
            </div>
            <button type="submit" className="login-btn">
              Log In
            </button>
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
