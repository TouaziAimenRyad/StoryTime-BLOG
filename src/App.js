import React from 'react'
import './App.css';
import Imgzone from './components/Imgzone';
import Nav from './components/Nav.js'
import imgLink from './imgs/img.jpg'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data:null
    }
  }

  passInfo=(childData)=>{
    this.setState({data:childData},()=>{console.log(this.state)}) //setstate is aychronous if you want to use the state the moment it changes you need to put the function to do that in the setState() call back
    

  }
 
 
    
  render(){
  return (
    <div className="App ">
      <Nav passInfo={this.passInfo}></Nav>
      <Imgzone img={imgLink}></Imgzone>
    </div>
  )}
}

export default App;
