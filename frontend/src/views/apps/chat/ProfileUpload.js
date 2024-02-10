import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { left } from '@popperjs/core';

function UserProfile() {
  const [avatar, setAvatar] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);

      // You might also want to handle the file upload logic here
      // e.g., send the file to your server for storage
      // handleFileUpload(file);
    }
  };

  // Placeholder for file upload logic
  const handleFileUpload = (file) => {
    // Add your file upload logic here
    console.log('File uploaded:', file);
  };

  return (
    <div style={{ textAlign: 'center', margin: 'auto' }}>
      {avatar && (
        <Avatar
          sx={{ width: 80, height: 80 }}
          src={avatar}
          alt="User Avatar"
          style={{ marginTop: '10px', textAlign: 'center', margin: 'auto' }}
        />
      )}
      {/* <div style={{ marginBottom: '10px',textAlign:left  }}>Communitie Profile</div> */}
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ marginBottom: '10px' , marginTop: '10px' ,textAlign: 'center', margin: 'auto'  }}
        label=' Communitie Name'
        
      />
    </div>
  );
}

export default UserProfile;
