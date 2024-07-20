import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";

//importing react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//create a router
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        {" "}
        <Login />
      </div>
    ),
  },
  {
    path: "/register",
    element: (
      <div>
        {" "}
        <Register />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        {" "}
        <Dashboard />
      </div>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
