import logo from "./logo.png";
import "./Dashboard.css";

import { MdDashboard } from "react-icons/md";
import { BsBagCheckFill } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { IoPieChartSharp } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdPermContactCalendar } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="heading">
        <img src={logo} alt="logo" className="logo" />
        <span>Plants</span>
      </div>
      <div className="sideList">
        <ul>
          <li className="li-main">
            Quick Menu
            <div className="li-main-list">
              <ul>
                <li>
                  <div className="li-item">
                    <MdDashboard className="icon" />
                    Dashboard
                  </div>
                </li>
                <li>
                  <div className="li-item">
                    <BsBagCheckFill className="icon" />
                    My Orders
                  </div>
                </li>
                <li>
                  <div className="li-item">
                    <MdOutlineExplore className="icon" />
                    Explore
                  </div>
                </li>
                <li>
                  <div className="li-item">
                    <AiFillProduct className="icon" />
                    Products
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="li-main">
            Settings
            <div className="li-main-list">
              <ul>
                <li>
                  <div className="li-item">
                    <IoPieChartSharp className="icon" />
                    Charts
                  </div>
                </li>
                <li>
                  <div className="li-item">
                    <FaArrowTrendUp className="icon" />
                    Trends
                  </div>
                </li>
                <li>
                  <div className="li-item">
                    <MdPermContactCalendar className="icon" />
                    Contact
                  </div>
                </li>
                <li>
                  <div className="li-item">
                    <RiBillLine className="icon" />
                    Billing
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <button className="logout-btn">
        <TbLogout2 className="logout-icon" />
        <span>Log out</span>
      </button>
    </div>
  );
}
