import "./Top.css";
import { BiSearchAlt } from "react-icons/bi";
import { RiMessage2Line } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import video from "./video.mp4";
import adminImg from "./jay.jpeg";

export default function Top() {
  return (
    <div className="Top">
      <div className="headerSection">
        <div className="top-title">
          <h1>Welcome to Plants</h1>
          <p>Hello Jay, welcome back!</p>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search Here" />
          <BiSearchAlt className="search-icon" />
        </div>
        <div className="adminDiv">
          <RiMessage2Line className="adminIcon" />
          <IoIosNotificationsOutline className="adminIcon" />
          <div className="adminImage">
            <img src={adminImg} alt="Jay" />
          </div>
        </div>
      </div>

      <div className="cardSection">
        <div className="rightCard">
          <h1>Create and sell extraordinary products</h1>
          <p>The world's fastest-growing industry today is natural products!</p>
          <div className="buttons">
            <button className="">Explore More</button>
            <button className="">Top Sellers</button>
          </div>
          <div className="videoDiv">
            <video src={video} autoPlay muted loop></video>
          </div>
        </div>
      </div>
    </div>
  );
}
