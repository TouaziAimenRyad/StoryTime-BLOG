import React from 'react'
import './App.css';
import Imgzone from './components/Imgzone';
import Nav from './components/Nav.js'
import img1 from './imgs/story.png'
import img2 from './imgs/gall.png'
import img3 from './imgs/port.png'
import img4 from './imgs/about.png'
import MainZone from './components/mainzone';

var imgLink=[img1,img2,img3,img4]
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      imgId:0,
      zoneId:0
    }
  }

  passInfo=(img,zone)=>{
    this.setState({imgId:img,zoneId:zone},()=>{console.log(this.state)}) //setstate is aychronous if you want to use the state the moment it changes you need to put the function to do that in the setState() call back
    

  }
  passInfo5=(childData)=>{
    this.setState({zoneId:childData},()=>{console.log(this.state)}) //setstate is aychronous if you want to use the state the moment it changes you need to put the function to do that in the setState() call back
    

  }
  
 
    
  render(){
  return (
    <div className="App ">
      <Nav passInfo={this.passInfo}></Nav>
      <Imgzone img={imgLink[this.state.imgId]}></Imgzone>
      <MainZone zone={this.state.zoneId} passingInfo={this.passInfo5}></MainZone>
    </div>
  )}
}

export default App;
