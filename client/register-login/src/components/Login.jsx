import video from "../Login assets/video.mp4";
import logo from "../Login assets/logo.png";
import { FaUser } from "react-icons/fa";
import { BsShieldLockFill } from "react-icons/bs";
import { TbLogin2 } from "react-icons/tb";

import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="loginPage">
      <div className="container">
        <div className="video">
          <video src={video} autoPlay muted loop></video>
          <div className="text">
            <h2 className="title">Create And Sell Extraordinary Products</h2>
            <p>Adopt the piece of nature!</p>
          </div>
          <div className="footer">
            <span>Don't have an account?</span>
            <Link to={"/register"}>
              <button className="btn">Sign Up</button>
            </Link>
          </div>
        </div>

        <div className="form-box">
          <div className="header">
            <img src={logo} alt="Logo" />
            <h3>Welcome Back!</h3>
          </div>
          <form action="" className="form">
            <span className="showMsg">Login status</span>
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input">
                <FaUser className="icon" />
                <input type="text" id="username" placeholder="Enter Username" />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input">
                <BsShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                />
              </div>
            </div>
            <button type="submit" className="btn login-btn">
              <span>Login</span>
              <TbLogin2 className="login-icon" />
            </button>

            <span>
              Forget your password? <a href="">Click here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
