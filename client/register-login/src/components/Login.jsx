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
              <button>Sign Up</button>
            </Link>
          </div>
        </div>

        <div className="form-box">
          <div className="header">
            <img src={logo} alt="Logo" />
            <h3>Welcome Back!</h3>
          </div>
          <form action="" className="form">
            <span></span>
            <label htmlFor="username">Username</label>
            <FaUser />
            <input type="text" id="username" placeholder="Enter Username" />
            <label htmlFor="password">Password</label>
            <BsShieldLockFill />
            <input type="password" id="password" placeholder="Enter Password" />
            <button type="submit">
              Login
              <TbLogin2 />
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
