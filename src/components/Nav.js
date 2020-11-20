import React, { Component } from 'react'



class Homebt extends Component {

    onTrigger2=(event)=>{
        this.props.passInfo2('0');
        event.preventDefault();
    }

    mouseE=()=>{
        var a =document.getElementById('hometxt');
        a.style.color='black'
    }

    mouseL=()=>{
        var a=document.getElementById('hometxt');
        a.style.color='#e6e6e6'
    }

    render() {
        return (
            <button onClick={this.onTrigger2} onMouseEnter={this.mouseE} onMouseLeave={this.mouseL} className="home bt1 container">
                <p id="hometxt" >Home</p>
                
            </button>
        )
    }
}

 class Aboutbt extends Component {
    onTrigger2=(event)=>{
        this.props.passInfo2('3');
        event.preventDefault();
    }

    mouseE=()=>{
        var a =document.getElementById('abouttxt');
        a.style.color='black'
    }

    mouseL=()=>{
        var a=document.getElementById('abouttxt');
        a.style.color='#e6e6e6'
    }

    render() {
        return (
            <button onClick={this.onTrigger2} onMouseEnter={this.mouseE} onMouseLeave={this.mouseL} className="about bt1 container">
                <p id="abouttxt" >AboutMe</p>
            </button>
        )
    }
}


 class Gallerybt extends Component {
    onTrigger2=(event)=>{
        this.props.passInfo2('1');
        event.preventDefault();
    }

    mouseE=()=>{
        var a =document.getElementById('gallerytxt');
        a.style.color='black'
    }

    mouseL=()=>{
        var a=document.getElementById('gallerytxt');
        a.style.color='#e6e6e6'
    }


    render() {
        return (
            <button onClick={this.onTrigger2} onMouseEnter={this.mouseE} onMouseLeave={this.mouseL} className="gallery bt1 container">
                <p id="gallerytxt">Gallery</p>
            </button>
        )
    }
}


 class Portfoliobt extends Component {
    onTrigger2=(event)=>{
        this.props.passInfo2('2');
        event.preventDefault();
    }

    mouseE=()=>{
        var a =document.getElementById('portfoliotxt');
        a.style.color='black'
    }

    mouseL=()=>{
        var a=document.getElementById('portfoliotxt');
        a.style.color='#e6e6e6'
    }

    render() {
        return (
            <button onClick={this.onTrigger2} onMouseEnter={this.mouseE} onMouseLeave={this.mouseL} className="portfolio bt1 container">
                <p id="portfoliotxt">Portfolio</p>
            </button>
        )
    }
}

 class Nav extends Component {
     constructor(props){
         super(props);
         this.state={
             id:null
         }
     }
      passInfo2=(childData)=>{
          this.setState({id:childData},()=>{ this.props.passInfo(this.state.id)});
         
          
      }

   


    render() {
        return (
            <div className="nav container-fluid">
                 <Aboutbt passInfo2={this.passInfo2}></Aboutbt>
                <Homebt passInfo2={this.passInfo2}  ></Homebt>
                <Gallerybt passInfo2={this.passInfo2}></Gallerybt>
                <Portfoliobt passInfo2={this.passInfo2}></Portfoliobt>
            </div>
        )
    }
}
 export default Nav