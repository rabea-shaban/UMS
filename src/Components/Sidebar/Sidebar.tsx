import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { FaUserPlus } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { AiFillProfile } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSidebar } from "../../context/SidebarContext"; // استدعاء السياق
import "./index.scss";
import { AuthContextType } from "../../interface";
import { useContext } from "react";
import { AuthContext } from "../../context/AuuthContext";

const Sidebars: React.FC = () => {
  const { collapsed } = useSidebar();
  let { userDataAuth } = useContext(AuthContext) as AuthContextType;
  let logout = () => {
    localStorage.removeItem("userToken");
    window.location.href = "/";
  };
  return (
    <Sidebar collapsed={collapsed} className="vh-100 position-relative">
      <div>
        <h4 className="sidBAr-title">UMS</h4>
        <div className="info-personal text-center">
          <div className="img">
            <img className="w-100" src={userDataAuth?.image} alt="imgProfile" />
          </div>
          <h4>
            {userDataAuth?.firstName} {userDataAuth?.lastName}{" "}
          </h4>
          <p>Admin</p>
        </div>
      </div>
      <Menu>
        <MenuItem icon={<IoHomeOutline />} component={<Link to="/dashboard" />}>
          Home
        </MenuItem>
        <MenuItem
          icon={<CiUser />}
          component={<Link to="/dashboard/UserList" />}
        >
          User
        </MenuItem>
        <MenuItem
          icon={<FaUserPlus />}
          component={<Link to="/dashboard/AddUser" />}
        >
          Add User
        </MenuItem>
        <MenuItem
          icon={<AiFillProfile />}
          component={<Link to="/dashboard/Profile" />}
        >
          Profile
        </MenuItem>
        <div className="logout">
          <Menu>
            <MenuItem onClick={logout} icon={<MdOutlineLogout />}>
              logOut
            </MenuItem>
          </Menu>
        </div>
      </Menu>
    </Sidebar>
  );
};

export default Sidebars;
