import React from "react";
import { Link } from 'react-router-dom';
import '../assets/styles/navbar.scss';
import '../../node_modules/jquery/dist/jquery.min.js';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';

 const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand nav-link" href="/">Twitter-Lite</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
            </ul>
          </div>
        </nav>
    )
}

export default Navbar;

