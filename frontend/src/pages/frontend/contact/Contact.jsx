import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const formDataInitialState = {
  title: "",
  description: "",
  category: "",
  dueDate: "",
  priority: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(formDataInitialState);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreateTask = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/tasks", formData)

      .then((response) => {
        console.log("Your Account created successfully!!");
        console.log("response.data : ", response.data);
        setFormData(formDataInitialState);
        navigate("/");
      })
      .catch((error) => {
        console.log("Error : ", error);
      });
  };

  return (
    <div>
      {" "}
      <form onSubmit={handleCreateTask} className="user-form">
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={FormData.title}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            name="description"
            onChange={handleChange}
            value={FormData.description}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input
            type="text"
            name="category"
            onChange={handleChange}
            value={FormData.category}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Due Date:</label>
          <input
            type="text"
            name="dueDate"
            onChange={handleChange}
            value={FormData.dueDate}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Priority:</label>
          <input
            type="text"
            name="priority"
            className="form-control"
            onChange={handleChange}
            value={FormData.priority}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create User
        </button>
      </form>
    </div>
  );
}
