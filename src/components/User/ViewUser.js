import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const ViewUser = (props) => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  let history = useHistory();
  const { id } = useParams();
  const { name, username, email, phone, website } = user;
  useEffect(() => {
    loadUser().then((user) => {
      setUser(user);
    });
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    return result.data;
  };

  const handleOnInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleOnFormSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    history.push("/");
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">User Details : {id}</h2>
        <form onSubmit={handleOnFormSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your name"
              name="name"
              value={name}
              onChange={(e) => handleOnInputChange(e)}
              disabled
            />
          </div>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your Username"
              name="username"
              value={username}
              onChange={(e) => handleOnInputChange(e)}
              disabled
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your Email address"
              name="email"
              value={email}
              onChange={(e) => handleOnInputChange(e)}
              disabled
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your phone number"
              name="phone"
              value={phone}
              onChange={(e) => handleOnInputChange(e)}
              disabled
            />
          </div>
          <div className="form-group">
            <label>Website Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your website name"
              name="website"
              value={website}
              onChange={(e) => handleOnInputChange(e)}
              disabled
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ViewUser;
