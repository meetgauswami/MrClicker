import Alert from './Alert';
import './requestNum.css'
import React, { Component } from 'react'

export class requestNum extends Component {


    state={
        alert:0,
        onclick:"",
        valueName: ""
    }

    progressBar = () => {
        this.props.setProgress(10)
        setTimeout(() => {
        this.props.setProgress(100)
        }, 400);
    }
    requestNum =() => [
        this.setState({alert: 5}),
        // setTimeout(() => {
        //     this.setState({alert: 0})
        // }, 6000)
    ]

    NamePost = (event) => {
        let  inputData = (event.target.value)
      this.setState({valueName: (event.target.value)})
    }




  render() {
    return (
        <div>
          {this.state.valueName && this.state.alert && <Alert NameRequester={this.state.valueName}/>}
        <div className="img-name" style={{marginTop: '3rem'}}>
        <img onLoad={this.progressBar} src="https://i.pinimg.com/originals/40/07/3a/40073aaab270160f0a885cc2eaa9956e.png" alt="MrClicker" />
        <h3>MrClicker</h3>
        </div>
         <div className="comment-section">
    <h2>Request For Number</h2>
    <div className="comment-form">
      <label htmlFor="name">Email:</label>
      <input required type="text" id="name" onChange={this.NamePost} placeholder="Enter your Email" />
      
      <label htmlFor="comment">Comment:</label>
      <textarea id="comment" rows="5" placeholder="Write your request here..."></textarea>
      
      <a type="button" href='#' onClick={this.requestNum}>Post Request</a>
    </div>
    {/* <!-- Example of a comment --> */}
    <div className="comment mt-3">
      <h3>Meet Gauswami</h3>
      <p>This is an example of a user comment. It's informative and styled to encourage interaction.</p>
    </div>
  </div>
      </div>
    )
  }
}

export default requestNum
