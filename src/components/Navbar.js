import React from 'react'
import "../components/styles/Navbar.css";

const Navbar = () => {
  return (
    <section id="navbar">
    <div className="container">
      <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: 'white' }} >
        <a className="navbar-brand" href="#" style={{fontWeight: "bold"}}
          >Learnify</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse " id="navbarText">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link nav-text" href="#carousel">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-text" href="#about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-text" href="#contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-text" href="#review">Review</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-text" href="#login">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
  )
}

export default Navbar