import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const login = async (email, password) => {
    axios.defaults.withCredentials = true;
    const response = await axios.post("/api/auth/login", {
      email,
      password,
    });

    const { name } = response.data;

    if (response.status === 200) {
      localStorage.setItem("user", name);
      dispatch({ type: "LOGIN", payload: name });
      navigate("/createPlan");
    }
  };

  return { login };
};
