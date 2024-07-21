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
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="heading">
        <img src={logo} alt="logo" className="logo" />
        <span>Plants</span>
      </div>
      <div className="sideList">
        <div className="li-main">
          <h3>Quick Menu</h3>
          <div className="li-main-list">
            <ul>
              <li className="li-item">
                <MdDashboard className="icon" />
                Dashboard
              </li>
              <li className="li-item">
                <BsBagCheckFill className="icon" />
                My Orders
              </li>
              <li className="li-item">
                <MdOutlineExplore className="icon" />
                Explore
              </li>
              <li className="li-item">
                <AiFillProduct className="icon" />
                Products
              </li>
            </ul>
          </div>
        </div>
        <div className="li-main">
          <h3>Settings</h3>
          <div className="li-main-list">
            <ul>
              <li className="li-item">
                <IoPieChartSharp className="icon" />
                Charts
              </li>
              <li className="li-item">
                <FaArrowTrendUp className="icon" />
                Trends
              </li>
              <li className="li-item">
                <MdPermContactCalendar className="icon" />
                Contact
              </li>
              <li className="li-item">
                <RiBillLine className="icon" />
                Billing
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Link to={"/"}>
        <button className="logout-btn">
          <TbLogout2 className="logout-icon" />
          <span>Log out</span>
        </button>
      </Link>
    </div>
  );
}
