import { useState } from "react";
// import Button from "../components/Button";
import { useLogin } from "../hooks/useLogin";
// import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLogin();


  const handleSubmit = async (e) => {
    e.preventDefault();

    login(email, password);

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={email}
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        name="password"
        value={password}
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button>Login</button>
      {/* <Button onSubmit={handleSubmit}>Login</Button> */}
    </form>
  );
};

export default LoginForm;
