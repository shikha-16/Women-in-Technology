import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import logo from '../images/WITfivicon.png';

export default function Header() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
            loading="lazy"
          />{' '}
          Women in Technology
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse my-2 my-lg-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
              
            </li>
            <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Resources
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Organizations</a>
          <a class="dropdown-item" href="#">Scolarships</a>
          <a class="dropdown-item" href="#">Blogs and Articles</a>
          <a class="dropdown-item" href="#">Helpful Github Repos</a>
          <a class="dropdown-item" href="#">Other Resources</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Community
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Join Discord</a>
          <a class="dropdown-item" href="#">Github Repo</a>
          <a class="dropdown-item" href="#">Founder</a>
          <a class="dropdown-item" href="#">Contributers</a>
          <a class="dropdown-item" href="#">About Community</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Contribute
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Github Repo</a>
          <a class="dropdown-item" href="#">Contributing Guidelines</a>
          <a class="dropdown-item" href="#">Resources for beginners</a>
        </div>
      </li>
      {/* Some dummy code below to create space around Contribute Dropdown */}
      <li className="nav-item active">
              <a className="nav-link" >
              </a>
      </li>
      <li className="nav-item active">
              <a className="nav-link" >
              </a>
      </li>
      <li className="nav-item active">
              <a className="nav-link" >
              </a>
      </li>
      <li className="nav-item active">
              <a className="nav-link" >
              </a>
      </li>
      <li className="nav-item active">
              <a className="nav-link" >
              </a>
      </li>
      {/* Dummy code ends */}
      
          </ul>
        </div>
      </nav>
    </div>
  );
}
