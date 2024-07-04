import axios from "axios";
import React, { useEffect, useState } from "react";
import Arrow from "../Arrow";

export default function Home() {
  const [accountsData, setAccountsData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/tasks")
      .then((response) => {
        console.log("response : ", response.data);
        setAccountsData(response.data);
      })
      .catch((error) => {
        console.error("Error : ", error);
      });
  }, []);

  const handleDeleteAccount = (_id) => {
    axios
      .delete("http://localhost:8000/api/tasks/" + _id)
      .then((response) => {
        console.log("response : ", response);
        const updateData = accountsData.filter((user) => user._id != _id);
        setAccountsData(updateData);
      })
      .catch((error) => {
        console.error("Error : ", error);
      });
  };

  return (
    <div>
      <h2>Data Table</h2>

      <table className="user-table">
        <thead>
          <tr>
            <th>I</th>
            <th>Title</th>
            <th>Due Date</th>
            <th>Description</th>
            <th>Categories</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {accountsData.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.title}</td>
              <td>{user.dueDate}</td>
              <td>{user.description}</td>
              <td>{user.category}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteAccount(user._id)}
                >
                  Delete
                </button>
                <button className="btn btn-warning">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <Arrow /> */}
    </div>
  );
}
