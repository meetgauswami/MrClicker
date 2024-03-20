import './review.css'
import React, { Component } from 'react'

export class review extends Component {
    progressBar = () => {
        this.props.setProgress(10)
        setTimeout(() => {
        this.props.setProgress(100)
        }, 400);
    }
    
  render() {
    return (
      <div>
         <div className="containers">
         <h1 className='mb-5 h1-review' style={{fontSize: '5rem', marginTop: '5rem'}}>Review</h1>
        <h2> Our Happy Clients </h2>
        <h4 className='h4Thanks'>Thanks for giving us your feedback online.</h4>
        <p className="description">Below are a few of the reviews that give our some love!</p>
    
        {/* <!-- Clients Review Section --> */}
        <div className="reviewSection">

        {/* <!-- Clients Review-1 Section Starts from Here  --> */}
            <div className="reviewItem">
                <div className="top">
                    <div className="clientImage">
                        <img onLoad={this.progressBar} src="https://i.imghippo.com/files/tm6a11710843887.jpg" alt="" />
                        <span>DK Mewada</span>
                    </div>
                    <ul>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-regular fa-star"></i></li>
                        <li><i className="fa-regular fa-star"></i></li>
                    </ul>
                </div>
                <article>
                    <p className="review">not all of us are professional photographers of course which means we would on online libraries so that which makes MrClicker a safe haven for many content creators.<br/>love it!!</p>
                    <p>Jan 01, 2023</p>
                </article>
            </div>

        {/* <!-- Clients Review-2 Section Starts from Here  --> */}
            <div className="reviewItem">
                <div className="top">
                    <div className="clientImage">
                        <img src="https://i.imghippo.com/files/FxzW21710844322.jpg" alt="" />
                        <span>Yash Guaswami</span>
                    </div>
                    <ul>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-regular fa-star"></i></li>
                        <li><i className="fa-regular fa-star"></i></li>
                    </ul>
                </div>
                <article>
                    <p className="review">"MrClicker makes the image searching process much easier and this helps to get better images and royalty free digital content, Best stock image website ever, Thank You"</p>
                    <p>Jan 01, 2023</p>
                </article>
            </div>

        {/* <!-- Clients Review-3 Section Starts from Here  --> */}
            <div className="reviewItem">
                <div className="top">
                    <div className="clientImage">
                        <img src="https://i.imghippo.com/files/uN1FW1710844357.jpg" alt="" />
                        <span>Harshil Gauswami</span>
                    </div>
                    <ul>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-regular fa-star"></i></li>
                        <li><i className="fa-regular fa-star"></i></li>
                    </ul>
                </div>
                <article>
                    <p className="review">the library contains hundreds of high-quality photos that cover a wide range of niches and what makes it great source for artists and content creators alike who struggle to find high res images to use for their content.</p>
                    <p>Jan 01, 2023</p>
                </article>
            </div>
        </div>
    </div>
      </div>
    )
}
}

export default review
