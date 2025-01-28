

import React from "react";
import "./UserList.css"

const UserList = ({ users, editUser, deleteUser }) => {
  //console.log(users)
  return (
    <div>
      <h2>User List</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            const [firstName, ...lastNameParts] = user.name.split(" ");
            const lastName = lastNameParts.join(" ");
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{user.email}</td>
                <td>{user.company.name|| "N/A"}</td>
                <td>
                  <button onClick={() => editUser(user)} className="edit-btn">
                    Edit
                  </button>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
