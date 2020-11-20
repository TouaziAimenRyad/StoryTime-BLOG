import React, { Component } from 'react'


class Homebt extends Component {

    onTrigger2=(event)=>{
        this.props.passInfo2('0');
        event.preventDefault();
        console.log('hhbhbhbhb')
    }

    render() {
        return (
            <button onClick={this.onTrigger2} className="home bt1 container">
                <p >Home</p>
                
            </button>
        )
    }
}

 class Aboutbt extends Component {
    render() {
        return (
            <button className="about bt1 container">
                <p >AboutMe</p>
            </button>
        )
    }
}


 class Gallerybt extends Component {
    render() {
        return (
            <button className="gallery bt1 container">
                <p>Gallery</p>
            </button>
        )
    }
}


 class Portfoliobt extends Component {
    render() {
        return (
            <button  className="portfolio bt1 container">
                <p>Portfolio</p>
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
                 <Aboutbt></Aboutbt>
                <Homebt passInfo2={this.passInfo2}  ></Homebt>
                <Gallerybt></Gallerybt>
                <Portfoliobt></Portfoliobt>
            </div>
        )
    }
}
 export default Nav