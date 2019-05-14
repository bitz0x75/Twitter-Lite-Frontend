import React from "react";
import { Link } from 'react-router-dom';
import '../assets/styles/navbar.scss';
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.min';

 const Navbar = () => {
  const clearLocalStorage = () => {
    localStorage.removeItem('user')
   }

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand nav-link" href="/">Twitter-Lite</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/home" className="nav-link">Home</Link>
              </li>
            </ul>
            <li className="nav-item">
                <Link to="/home" className="nav-link logout" onClick={clearLocalStorage}>Logout</Link>
              </li>
          </div>
        </nav>
    )
}

export default Navbar;

