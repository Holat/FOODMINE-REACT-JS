import { useContext, createContext } from "react";
// import { AuthContext } from "../context/AuthProvider";
export const AuthContext = createContext(null);
const useAuth = () => useContext(AuthContext);

export default useAuth;
