import { Outlet } from "react-router-dom";

interface IProps {}
const AuthLayout = ({}: IProps) => {
  return <Outlet />;
};

export default AuthLayout;
