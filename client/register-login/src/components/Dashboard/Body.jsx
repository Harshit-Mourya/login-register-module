import "./Dashboard.css";
import Top from "./Top.jsx";
import Listing from "./Listing.jsx";
import Activity from "./Activity.jsx";

export default function Body() {
  return (
    <div className="Body">
      <Top />
      <div className="bottom">
        <Listing />
        <Activity />
      </div>
    </div>
  );
}
