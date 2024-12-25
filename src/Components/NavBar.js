import './NavBar.css'

import React, {Component} from 'react'
import {Link} from 'react-router-dom' 


export class NavBar extends Component {

  myFunction = function(event) {
    // reset all menu items
    document.querySelectorAll('ul li a.active').forEach(function(item) {
    item.classList.remove('active');
  })
    // mark as active selected menu item
    event.target.classList.add("active");
  };
removeToggle =() => {
  document.querySelector(".navbar-toggler").classList.add("collapsed")
  document.querySelector(".navbar-collapse").classList.remove("show")
  // document.querySelectorAll(".nav-link").forEach((Link) => {
  //   if (Link.to === window.location.to) {
  //             Link.classList.add("active");
  //             Link.setAttribute("aria-current", "page");
              
  //         }
  // })
}

  render() {
   return (
    
   <nav className="navbar navbar-expand-lg navbar-dark fixed-top  bg-dark main-navbar">
  <div className="container-fluid">
    <img className='img-logo' src="https://i.pinimg.com/originals/40/07/3a/40073aaab270160f0a885cc2eaa9956e.png" alt="" />
    <Link className="navbar-brand" onClick={this.removeToggle} to="/">MrClicker</Link>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul onClick={this.myFunction} id='navList' className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" onClick={this.removeToggle}  to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/review" onClick={this.removeToggle} >Review</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contact Us
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" onClick={this.removeToggle} href="mailto: gauswamimeet471@gmail.com">gauswamimeet471@gmail.com</a></li>
            <li><Link className="dropdown-item" onClick={this.removeToggle}  to="requestNum">Request For Number</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" target='_blank'  onClick={this.removeToggle} href="https://www.instagram.com/gauswami_meet_07?igsh=cnhqZjBoaGVnbnp6">Instagram</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/about'  onClick={this.removeToggle}  aria-disabled="true">About</Link>
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to='/login'  onClick={this.removeToggle}  aria-disabled="true">Log In/SignUp</Link> */}
        </li>
        </ul>
      
    </div>
  </div>
</nav>
  
        
  )
}
}
 
export default NavBar