import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate,Link, useParams } from 'react-router-dom';

const EditUser = () => {

    let navigate = useNavigate();
    const {id} = useParams();

    const [user,setUser] = useState({
        name:"",
        username:"",
        email:""
    })
    const {name,username,email} = user;

    const onInputChange= (e: any) => {
        setUser({...user,[e.target.name]:e.target.value});
    }

    useEffect(() => {
        loadUsers();
    }, [])

    const onSubmit= async(e: any) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`, user)
        navigate("/")
    };

    const loadUsers = async() => {
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }

  return (
    <div
      className="container"
      style={{
        maxWidth: '90%', // Adjust the width of the container
        height: '80vh', // Adjust the height of the container
        display: 'flex', // Center the content vertically and horizontally
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        className="col-lg-8 col-md-10 col-sm-12 border rounded p-4 shadow"
        style={{
          backgroundColor: '#f8f9fa',
          width: '100%', // Make it responsive
        }}
      >
        <h2 className="text-center mb-4">Edit User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your username"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-outline-primary w-100">
            Update
          </button>
          <br/>
          <Link to="/" className="btn btn-outline-danger w-100">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
