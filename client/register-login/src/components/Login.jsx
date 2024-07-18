import video from "../Login assets/video.mp4";
import logo from "../Login assets/logo.png";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex loginPage">
      <div className="container flex">
        <div className="video">
          <video src={video} autoPlay muted loop></video>
          <div className="text">
            <h2>Create And Sell Extraordinary Products</h2>
            <p>Adopt the piece of nature!</p>
          </div>
          <div className="footer flex">
            <span>Don't have an account?</span>
            <Link to={"/register"}>
              <button>Sign Up</button>
            </Link>
          </div>
        </div>

        <div className="form flex">
          <div className="header">
            <img src={logo} alt="Logo" />
            <h3>Welcome Back!</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
