import { useState } from "react";
import Button from "../components/Button";
import axios from "axios";

const UpdateProfileForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    const response = await axios.put(`/api/auth/profile`, {
      name,
      email,
      password,
      address,
    });

    if (response.status === 201) {
      console.log("updated");
    }
  };

  return (
    <>
      <h1>Update Your Details</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Update your name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          value={email}
          placeholder="Update your email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          value={password}
          placeholder="Update your password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="text"
          value={address}
          placeholder="Update your address"
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <Button>Update</Button>
      </form>
    </>
  );
};

export default UpdateProfileForm;
