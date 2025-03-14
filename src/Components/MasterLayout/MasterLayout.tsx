import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Sidebars from "../Sidebar/Sidebar";

interface IProps {}
const MasterLayout = ({}: IProps) => {
  return (
    <div className="d-flex">
      <Sidebars />

      <div className="main-content w-100 ">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default MasterLayout;
