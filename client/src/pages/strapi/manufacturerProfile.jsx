import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManufacturerProfile = ({ manufacturerId }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('jwt'));


  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/manufacturers/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    if (token) {
      fetchUserProfile();
    }
  }, [token]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <h2>{user.email}</h2>
      {/* Add any additional fields you want to display */}
    </div>
  );
};

export default ManufacturerProfile;
