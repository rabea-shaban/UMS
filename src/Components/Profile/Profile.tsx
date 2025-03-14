import { useContext } from "react";
import "./profile.scss";
import { AuthContext } from "../../context/AuuthContext";
import { AuthContextType } from "../../interface";
const Profile = () => {
  let { userDataAuth } = useContext(AuthContext) as AuthContextType;
  console.log(userDataAuth);

  return (
    <div className="container-fluid">
      <div className="border-bottom">
        <h3 className="fw-bold mt-3">Profile</h3>
      </div>

      <div className="frm">
        <div className="img">
          <img src={userDataAuth?.image} alt="Profile Pic" />
        </div>
        <form className="shadow-lg mt-5 m-5 p-4 border rounded-4 bg-white">
          <div className="row">
            <div className="col-md-6">
              <div className="mb-1">
                <label className="form-label">First name</label>
                <input
                  type="text"
                  className="form-control fw-bold fs-5"
                  readOnly
                  value={userDataAuth?.firstName}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-1">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control fw-bold fs-5"
                  readOnly
                  value={userDataAuth?.lastName}
                />
              </div>
            </div>
          </div>

          <div className="row my-3">
            <div className="col-md-6">
              <div className="mb-1">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control text-muted bg-light"
                  readOnly
                  value={userDataAuth?.email}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-1">
                <label className="form-label">Age</label>
                <input
                  type="number"
                  className="form-control text-muted bg-light"
                  readOnly
                  value={22}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="mb-1">
                <label className="form-label">Phone Number</label>
                <input
                  type="string"
                  className="form-control text-muted bg-light"
                  readOnly
                  value={"01156807072"}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-1">
                <label className="form-label">Birth Date</label>
                <input
                  type="string"
                  className="form-control text-muted bg-light"
                  readOnly
                  value={"2-6-2002"}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
