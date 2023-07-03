import { Uselogincontext } from "../context/Logincontext";
import { Navigate } from "react-router-dom";
export default function Protected({ children }) {
  const { isAuthenticated } = Uselogincontext();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
