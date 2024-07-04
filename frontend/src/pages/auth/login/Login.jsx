import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const formDataInitialState = {
  email: "",
  password: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(formDataInitialState);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const Login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/auth/login", formData)
      .then((response) => {
        console.log("Your Account created successfully!!");
        console.log("response.data:", response.data);
        setFormData(formDataInitialState);
        navigate("/");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div>
      {" "}
      <form onSubmit={Login} className="user-form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={formData.email}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
