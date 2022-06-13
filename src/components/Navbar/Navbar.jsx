import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div data-cy="navbar">
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
        <Link data-cy="navbar-home-link" to="/">Home</Link>
      </div>
      <div>
        <div data-cy="navbar-cart-items-count">0</div>
        <button data-cy="navbar-login-logout-button"></button>
      </div>
    </div>
  );
};

export default Navbar;
