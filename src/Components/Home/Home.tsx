import { FaUserPlus, FaUsers, FaUsersCog } from "react-icons/fa";
import { RiUserShared2Fill } from "react-icons/ri";
import Chart from "../../assets/ChartHome.png";
import "./home.css";
import { IoMdDocument } from "react-icons/io";
import { IoDocumentTextSharp } from "react-icons/io5";
import { MdEditDocument } from "react-icons/md";

interface IProps {}
const Home = ({}: IProps) => {
  return (
    <div className="Home container-fluid">
      <div className="row my-4">
        <div className="col-6">
          <h1>Dashboard</h1>
        </div>
        <div className="col-6">
          <h2 className="fw-bold">UMS</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <div className=" mb-3 position-relative d-flex align-items-start bg-white p-3 rounded-4 border-top border-primary">
                <div className="icon bg-primary p-2 rounded">
                  <FaUsers size={30} color="white" />
                </div>
                <div className="text ms-3">
                  <h3 className="fs-6 text-fw-semibold text-muted  mb-2">
                    Total Employees
                  </h3>
                  <p className="fw-semibold mb-2">22,124 </p>
                  <span className="badge bg-primary">Success</span>
                </div>
                <div className="position-absolute end-0 pe-3 fs-14 fw-semibold text-success">
                  +1.03%
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className=" mb-3 position-relative d-flex align-items-start bg-white p-3 rounded-4 border-top border-info">
                <div className="icon bg-info p-2 rounded">
                  <RiUserShared2Fill size={30} color="white" />
                </div>
                <div className="text ms-3">
                  <h3 className="fs-6 text-fw-semibold text-muted mb-2">
                    New Employees
                  </h3>
                  <p className="fw-semibold mb-2">1,024 </p>
                  <span className="badge bg-info">Success</span>
                </div>
                <div className="position-absolute end-0 pe-3 fs-14 fw-semibold text-success">
                  +2.45%
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="mb-3 position-relative d-flex align-items-start bg-white p-3 rounded-4 border-top border-warning">
                <div className="icon bg-warning p-2 rounded">
                  <FaUsersCog size={30} color="white" />
                </div>
                <div className="text ms-3">
                  <h3 className="fs-6 text-fw-semibold text-muted mb-2">
                    Total Clients
                  </h3>
                  <p className="fw-semibold mb-2">7,892 </p>
                  <span className="badge bg-warning">Warning</span>
                </div>
                <div className="position-absolute end-0 pe-3 fs-14 fw-semibold text-danger">
                  -0.98%
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3 position-relative d-flex align-items-start bg-white p-3 rounded-4 border-top border-success">
                <div className="icon bg-success p-2 rounded">
                  <FaUserPlus size={30} color="white" />
                </div>
                <div className="text ms-3">
                  <h3 className="fs-6 text-fw-semibold text-muted mb-2">
                    New Leads
                  </h3>
                  <p className="fw-semibold mb-2">$12,345,678 </p>
                  <span className="badge bg-success">Success</span>
                </div>
                <div className="position-absolute end-0 pe-3 fs-14 fw-semibold text-success">
                  +1.75%
                </div>
              </div>
            </div>
          </div>
          <div className="Summary bg-white rounded-4 p-3 mb-3">
            <h3 className="fs-6 fw-bold">Applicants Summary</h3>

            <ul className="row list-unstyled border-top mt-4 pt-3">
              <li className="col-md-4 d-flex align-items-start gap-4">
                <div className="icon">
                  <IoMdDocument size={30} className="text-primary2" />
                </div>
                <div className="text">
                  <p className="mb-0 text-muted fw-medium fs-6">
                    new applicants
                  </p>
                  <p className="small fw-bold mt-2 fs-6">2,981</p>
                </div>
              </li>
              <li className="col-md-4 d-flex align-items-start gap-4">
                <div className="icon">
                  <IoDocumentTextSharp size={30} className="text-info" />
                </div>
                <div className="text">
                  <p className="mb-0 text-muted fw-medium fs-6">
                    Selected Candidates
                  </p>
                  <p className="small fw-bold mt-2 fs-6">1,563</p>
                </div>
              </li>

              <li className="col-md-4 d-flex align-items-start gap-4">
                <div className="icon">
                  <MdEditDocument size={30} className="text-warning" />
                </div>
                <div className="text">
                  <p className="mb-0 text-muted fw-medium fs-6">
                    rejected applicants
                  </p>
                  <p className="small fw-bold mt-2 fs-6">982</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-6">
          <div className="bg-white rounded-4 p-3">
            <div className="title d-flex justify-content-between">
              <h6>Performance By Category</h6>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  className="btn btn-primary-light btn-sm btn-wave"
                >
                  1W
                </button>
                <button
                  type="button"
                  className="btn btn-primary-light btn-sm btn-wave"
                >
                  1M
                </button>
                <button
                  type="button"
                  className="btn btn-primary-light btn-sm btn-wave"
                >
                  6M
                </button>
                <button
                  type="button"
                  className="btn btn-primary2 btn-sm btn-wave"
                >
                  1Y
                </button>
              </div>
            </div>
            <div className="img">
              <img src={Chart} className="img-fluid" alt="Performance" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
