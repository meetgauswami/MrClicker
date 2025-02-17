import './About.css'
import React,{Component} from 'react'


export class About extends Component {

progressBar = () => {
    this.props.setProgress(10)
    setTimeout(() => {
    this.props.setProgress(100)
    }, 400);
}


render(){
  return (
    <div>
    <section className="about">
        <h1>About Us</h1>
        <p>
          MrClicker is a Free Image Stock Website
          </p>
        <div className="about-info">
            <div className="about-img">
                <img   onLoad={this.progressBar} src="https://i.pinimg.com/originals/40/07/3a/40073aaab270160f0a885cc2eaa9956e.png" alt="Geeksforgeeks" />
            </div>
            <div>
            <p> MrClicker is a free image stock website
                that provides free images and provide images whithout copyright you can use in your videos and story and, it has become a trusted destination for over 12 million plus free Images worldwide.
            </p>
                <a type='button' style={{border: '1px solid white'}} className='btn-readMore readmore'>Read More...</a>
            </div>
        </div>
    </section>
 
    <section className="team">
        <h1 style={{color: 'white'}}>Meet Our Team</h1>
        <div className="team-cards">
           
            {/* <!-- Cards here --> */}
            {/* <!-- Card 1 --> */}
           
            <div className="card-about">
                <div className="card-about-img">
                    <img src="https://archive.org/download/instagram-plain-round/instagram%20dip%20in%20hair.jpg"alt="User 1" />
                </div>
                <div className="card-about-info">
                    <h3 className="card-about-name">Meet Gauswami</h3>
                    <p className="card-about-role">CEO and Founder</p>
                    <p className="card-about-email">gauswamimeet471@gmail.com</p>
                    <p><a type='button' href='mailto: gauswamimeet471@gmail.com' className="btn-readMore">Contact</a></p>
                </div>
            </div>
 
            {/* <!-- Card 2 --> */}
           
            <div className="card-about">
                <div className="card-about-img">
                    <img src="https://archive.org/download/instagram-plain-round/instagram%20dip%20in%20hair.jpg" alt="User 2" />
                </div>
                <div className="card-about-info">
                    <h3 className="card-about-name">Vishal Gauswami</h3>
                    <p className="card-about-role">Sponsor</p>
                    <p className="card-email">vishalgauswami1@gmail.com</p>
                    <p><a type='button' href='mailto: vishalgauswami1@gmail.com' className="btn-readMore">Contact</a></p>
                </div>
            </div>
{/*            
            <!-- Card 3 --> */}
           
            <div className="card-about">
                <div className="card-about-img">
                    <img src="https://archive.org/download/instagram-plain-round/instagram%20dip%20in%20hair.jpg" alt="User 3" />
                </div>
                <div className="card-about-info">
                    <h3 className="card-about-name">Meet Gauswami</h3>
                    <p className="card-about-role">Co-Founder</p>
                    <p className="card-email">gauswamimeet471@gmail.com</p>
                    <p><a type='button' href='mailto: gauswamimeet471@gmail.com' className="btn-readMore">Contact</a></p>
                </div>
            </div>
        </div>
    </section>
 
    <footer>
        <p>© 2024 MrClicker. All Rights Reserved.</p>
        <hr />
        <h6 className="card-subtitle">Meet Gauswami</h6>
        <p className="card-text mb-1"><small style={{color: 'grey'}}>Web Devloper</small></p>
    </footer>
    </div>
  )
}
}
export default About