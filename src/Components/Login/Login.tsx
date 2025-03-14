import { useForm } from "react-hook-form";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../context/AuuthContext";
import { AuthContextType } from "../../interface";

interface IProps {
  username: string;
  password: string;
}

const Login = () => {
  let { saveUserData } = useContext(AuthContext) as AuthContextType;
  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProps>();

  let onsubmit = async (data: IProps) => {
    try {
      let response = await axios.post("https://dummyjson.com/auth/login", data);
      localStorage.setItem("userToken", response?.data?.accessToken);
      saveUserData();

      toast.success("login success");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Failed to login, please try again.");
      console.log("Failed to login, please try again.");
    }
  };

  return (
    <div className="container-fluid container-login">
      <div className="row vh-100 justify-content-center align-items-center">
        <div className="col-md-4">
          <div className="bg-white p-4 rounded-4">
            <div className="login-Title text-center mb-5">
              <h3 className="fw-bold title">User Management System</h3>
              <h5 className="mt-5 fw-semibold">Sign In</h5>
              <small>Enter your credentials to access your account</small>
            </div>

            <form onSubmit={handleSubmit(onsubmit)}>
              <div className="form-group">
                <label className="text-muted" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter username"
                  {...register("username", {
                    required: "Username is required",
                  })}
                />
                {errors.username && (
                  <p className="text-danger">{errors.username.message}</p>
                )}
              </div>
              <div className="form-group">
                <label className="text-muted" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <p className="text-danger">{errors.password.message}</p>
                )}
              </div>
              <div className="form-group mt-4 mb-5">
                <button
                  type="submit"
                  className="btn btn-lg w-100 btn-warning text-white"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
