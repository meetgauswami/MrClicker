import React, { Component } from 'react'
import loader from "./loading2.gif"

export class Spinner extends Component {
  render() {
    return (
      <div>
         <div className='text-center mb-5'>
          <img className='mb-3' style={{width:'150px'}} src={loader} alt="Loading" />
      </div>
      </div>
    )
  }
}

export default Spinner
