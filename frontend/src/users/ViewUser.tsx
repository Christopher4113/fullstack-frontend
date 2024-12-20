import React, { useState, useEffect } from 'react'
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
const ViewUser = () => {
  const [user,setUser] = useState({
    name: "",
    username: "",
    email: ""
  })

  const {id} = useParams();

  useEffect(() => {
    loadUser();
  }, [])

  const loadUser= async () => {
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
            <h2 className="text-center mb-4">User Details</h2>
            <div className='card'>
              <div className='card-header'>
                Details of user id:
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    <b>Name:</b>
                    {user.name}
                  </li>
                  <li className='list-group-item'>
                    <b>Username:</b>
                    {user.username}
                  </li>
                  <li className='list-group-item'>
                    <b>Email:</b>
                    {user.email}
                  </li>
                </ul>
              </div>
            </div>
            <Link className="btn btn-primary my-2" to={"/"}>
              Back to Home
            </Link>
          </div>
    </div>
  )
}

export default ViewUser