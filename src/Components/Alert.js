import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export class Alert extends Component {

  render() {
    return (
      <div>
        <div class="alert alert-success" role="alert" style={{marginTop:'4rem', height: '7.9rem'}}>
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully sent request to our team and we give you response in just few days and "Thanks To Visit Our Website"</p>
  <Link style={{textDecoration: 'none', color: 'white', backgroundColor: 'black', padding: '.1rem 1rem', borderRadius: '6px', border: '1px solid white'}} type='button' to='/'> <i style={{color: 'white'}} class="fa-solid fa-circle-arrow-left"></i> Home</Link>
</div>
      </div>
    )
  }
}

export default Alert
