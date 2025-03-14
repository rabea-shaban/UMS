import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { useSidebar } from "../../context/SidebarContext";
import { Form, InputGroup } from "react-bootstrap";
import { FaRegBell, FaSearch } from "react-icons/fa";
import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuuthContext";
import { AuthContextType } from "../../interface";
const Navbar: React.FC = () => {
  const { onToggle } = useSidebar();
  const { collapsed } = useSidebar();
  let { userDataAuth } = useContext(AuthContext) as AuthContextType;

  return (
    <>
      <nav className="navbar bg-light d-flex justify-content-between">
        <div className="ps-4 d-flex align-items-center">
          {collapsed ? (
            <IoIosArrowDropright onClick={onToggle} size={30} />
          ) : (
            <IoIosArrowDropleft onClick={onToggle} size={30} />
          )}
          <h5 className="mb-0 ms-2 text-muted">{userDataAuth?.email}</h5>
        </div>
        <div className="d-flex align-content-center justify-content-center pe-4">
          <InputGroup className="px-3">
            <Form.Control type="text" placeholder="Search..." />
            <InputGroup.Text>
              <FaSearch />
            </InputGroup.Text>
          </InputGroup>
          <span className="ps-2">
            <FaRegBell size={24} className="text-muted " />
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
