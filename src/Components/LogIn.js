import { Link } from 'react-router-dom';
import './LogIn.css'
import React, { Component } from 'react'

export class LogIn extends Component {

	progressBar = () => {
        this.props.setProgress(10)
        setTimeout(() => {
        this.props.setProgress(100)
        }, 400);
    }

        // const wrapper = document.querySelector(".wrapper"),
        //   signupHeader = document.querySelector(".signup header"),
        //   loginHeader = document.querySelector(".login header");

    LoginClick = () => {
		document.querySelector(".wrapper").classList.add("active");
	}

         SignUpClick = () => {
			document.querySelector(".wrapper").classList.remove("active");
}
		

  render() {
    return (
      <div className='containerBody'>
        <section class="wrapper">
      <div class="form signup">
        <header onClick={this.SignUpClick}> <img  onLoad={this.progressBar} style={{width: '4rem'}} src="https://i.pinimg.com/originals/40/07/3a/40073aaab270160f0a885cc2eaa9956e.png" alt="" /> Signup</header>
        <form action="#" className='loginForm'>
          <input type="text" placeholder="Full name" required />
          <input type="text" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <div class="checkbox">
            <input type="checkbox" id="signupCheck" />
            <label for="signupCheck">I accept all terms & conditions</label>
          </div>
          <Link style={{textDecoration: 'none'}}  type="submit" value="Signup">Signup</Link>
        </form>
      </div>
      <div class="form login">
        <header onClick={this.LoginClick}>Login</header>
        <form action="#" className='loginForm'>
          <input type="text" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <a href="#">Forgot password?</a>
          {<Link style={{textDecoration: 'none'}} to="/login"  type="submit" value="Login" >Login</Link>}
        </form>
      </div>
    </section>
      </div>
    )
  }
}

export default LogIn
