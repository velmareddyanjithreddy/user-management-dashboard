

import React, { useState, useEffect } from "react";
import "./UserForm.css"

const UserForm = ({ addUser, updateUser, editingUser, setEditingUser }) => {
  const initialFormState = {
    id: null,
    name: "",
    email: "",
    department: "",
  };

  const [user, setUser] = useState(initialFormState);

  useEffect(() => {
    editingUser ? setUser(editingUser) : setUser(initialFormState);
  }, [editingUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Client-side validation
    if (!user.name || !user.email) {
      alert("Name and Email are required.");
      return;
    }

    editingUser ? updateUser(user) : addUser(user);
    setUser(initialFormState);
  };

  const handleCancel = () => {
    setEditingUser(null);
  };

  return (
    <div>
      <h2>{editingUser ? "Edit User" : "Add User"}</h2>
      <form onSubmit={handleSubmit} className="user-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={user.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={user.department}
          onChange={handleInputChange}
        />
        <button type="submit" className="submit-btn">
          {editingUser ? "Update User" : "Add User"}
        </button>
        {editingUser && (
          <button type="button" onClick={handleCancel} className="cancel-btn">
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default UserForm;
