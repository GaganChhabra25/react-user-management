import React, { useState, useEffect } from "react";
import classes from "./Home.module.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const Home = (props) => {
  const [users, setUsers] = useState([]);
  let history = useHistory();

  useEffect(() => {
    loadUsers();
  }, [setUsers]);

  const loadUsers = async () => {
    const users = await axios.get("http://localhost:3003/users");
    setUsers(users.data.reverse());
  };

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:3003/users/${userId}`);
    loadUsers();
    history.push("/");
  };

  return (
    <div className={classes.container}>
      <div className={classes.py - 4}>
        <h1>Home Page</h1>
        <table class="table border shadow">
          <thead class="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link class="btn btn-primary" to={`/users/view/${user.id}`}>
                      View
                    </Link>
                    <Link
                      class="btn btn-outline-primary"
                      to={`/users/edit/${user.id}`}
                    >
                      Edit
                    </Link>
                    <Link
                      class="btn btn-danger"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
