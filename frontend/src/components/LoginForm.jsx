import { useState } from "react";
import Button from "../components/Button";
import { useLogin } from "../hooks/useLogin";

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
        value={email}
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        value={password}
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button>Login</Button>
    </form>
  );
};

export default LoginForm;
