import React from 'react';

function UserIcon({ username }) {
  return (
    <div className="user-icon">
      {username.charAt(0).toUpperCase()}
    </div>
  );
}

export default UserIcon;