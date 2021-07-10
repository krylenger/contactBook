import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
      <Link to="/contactBook" className="navbar-brand ms-3"> Contact Book </Link>
    </nav>
  )
}

export default Navbar;
