import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./Components/AuthLayout/AuthLayout";
import Notfound from "./Components/Notfound/Notfound";
import Login from "./Components/Login/Login";
import MasterLayout from "./Components/MasterLayout/MasterLayout";
import Home from "./Components/Home/Home";
import UserList from "./Components/UserList/UserList";
import Sidebar from "./Components/Sidebar/Sidebar";
import Profile from "./Components/Profile/Profile";
import NavBar from "./Components/NavBar/NavBar";
import AddUser from "./Components/AddUser/AddUser";
import { ToastContainer } from "react-toastify";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      errorElement: <Notfound />,
      children: [
        { index: true, element: <Login /> },
        { path: "login", element: <Login /> },
      ],
    },
    {
      path: "dashboard",
      element: <MasterLayout />,
      errorElement: <Notfound />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "UserList", element: <UserList /> },
        { path: "Sidebar", element: <Sidebar /> },
        { path: "Profile", element: <Profile /> },
        { path: "NavBar", element: <NavBar /> },
        { path: "AddUser", element: <AddUser /> },
      ],
    },
  ]);
  return (
    <>
      <ToastContainer />

      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
