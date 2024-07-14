import React from 'react';
import { Link } from 'react-router-dom';
import UserIcon from './UserIcon';

function Header({ user }) {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li>
            {user ? (
              <UserIcon username={user.username} />
            ) : (
              <Link to="/auth">Login/Signup</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;