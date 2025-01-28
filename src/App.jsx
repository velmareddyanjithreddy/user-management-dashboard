// src/App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './components/UserList/UserList';
import UserForm from './components/UserForm/UserForm';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      setErrorMessage('Error fetching users. Please try again later.');
    }
  };

  // Add a new user
  const addUser = async (user) => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', user);
      setUsers([...users, { ...response.data, id: users.length + 1 }]);
    } catch (error) {
      setErrorMessage('Error adding user. Please try again.');
    }
  };

  // Update an existing user
  const updateUser = async (updatedUser) => {
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/users/${updatedUser.id}`, updatedUser);
      setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
      setEditingUser(null);
    } catch (error) {
      setErrorMessage('Error updating user. Please try again.');
    }
  };

  // Delete a user
  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      setErrorMessage('Error deleting user. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1>User Management App</h1>

      {errorMessage && <p className="error">{errorMessage}</p>}

      <UserForm
        addUser={addUser}
        updateUser={updateUser}
        editingUser={editingUser}
        setEditingUser={setEditingUser}
      />

      <UserList
        users={users}
        editUser={setEditingUser}
        deleteUser={deleteUser}
      />
    </div>
  );
};

export default App;
