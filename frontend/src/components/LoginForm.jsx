import { useState } from "react";
import Button from "../components/Button";
const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        onChange={handleChange}
        required
      />
      <Button>Login</Button>
    </form>
  );
};

export default LoginForm;
