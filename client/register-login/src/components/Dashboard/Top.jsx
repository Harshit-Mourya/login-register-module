import "./Top.css";
import { BiSearchAlt } from "react-icons/bi";
import { RiMessage2Line } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";

import video from "./video.mp4";
import adminImg from "./jay.jpeg";
import plant1 from "./plant1.png";

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
        <div className="leftCard">
          <div className="main">
            <div className="textDiv">
              <h1>My Stat</h1>
              <div className="flex">
                <span>
                  Today <br /> <small>4 Orders</small>
                </span>
                <span>
                  This Month <br /> <small>124 Orders</small>
                </span>
              </div>
              <span className="flex link">
                Go to my orders <GoArrowRight />
              </span>
            </div>
            <div className="imgCard">
              <img src={plant1} alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
