import { useState } from "react";
import Button from "../components/Button"

const RegisterForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    address: ""
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
        type="text"
        name="name"
        placeholder="Enter your name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        onChange={handleChange}
      />

      <input type="text" name="address" placeholder="Enter your address" onClick={handleChange} required />

    <Button>Register</Button>
    </form>
  );
};

export default RegisterForm;
