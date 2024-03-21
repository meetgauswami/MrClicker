import './App.css';
import React,{Component, useState} from 'react';
import NavBar from './Components/NavBar'
import PhotoBox from './Components/PhotoBox';
import { BrowserRouter,  Routes, Route} from "react-router-dom";
import PropTypes from 'prop-types'
import About from './Components/About';
import LoadingBar from 'react-top-loading-bar'
import Review from './Components/review'
import RequestNum from './Components/requestNum'
import { SpeedInsights } from "@vercel/speed-insights/react"


export class App extends Component {


  state = {
    progress : 10
  }

  setProgress = (progress) =>  {
    this.setState({progress: progress})
  }
  

      render() {
  return (
    <BrowserRouter>
   <div>
    <NavBar  />
    <LoadingBar
    height={3}
    color='#fff'
    progress={this.state.progress}
    />
    <Routes>
    <Route exact path="/" element={<PhotoBox setProgress={this.setProgress}/>}> </Route>
    <Route exact path="/about" element={<About setProgress={this.setProgress}/>}> </Route>
    <Route exact path="/review" element={<Review setProgress={this.setProgress}/>}> </Route>
    <Route exact path="/requestNum" element={<RequestNum setProgress={this.setProgress} />}> </Route>
     </Routes>
     <SpeedInsights/>
   </div>
   </BrowserRouter>
  );
  }
}

export default App