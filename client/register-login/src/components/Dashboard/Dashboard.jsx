import Sidebar from "./Sidebar.jsx";
import Body from "./Body.jsx";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboardContainer">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}
