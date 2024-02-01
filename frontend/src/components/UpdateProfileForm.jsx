import { useState } from "react";
import Button from "../components/Button";
const UpdateProfileForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
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
        placeholder="Update your name"
        onClick={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Update your email"
        onClick={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Update your password"
        onClick={handleChange}
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Update your address"
        onClick={handleChange}
        required
      />

      <Button>Update</Button>
    </form>
  );
};

export default UpdateProfileForm;
