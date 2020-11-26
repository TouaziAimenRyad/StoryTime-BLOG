import React, { Component } from 'react'
import BlogLinks from './BlogLinks'
//creating block  links from data base will be hear 

class AboutZone extends Component {
    render() {
        return (
            <div>
                <p>about</p> 
            </div>
        )
    }
}

 class HomeZone extends Component {
     constructor(props){
         super(props)
         this.state={
             id:0
         }
     }
     passinfo3=(childData)=>{
         this.setState({id:childData},()=>{this.props.passingInfo(this.state.id)})
       


     }
    render() {
        return (
            <div className="grid-container ">
                <BlogLinks title="titre" content="contenu" picture="" link="" id="4" className="grid-item" passingInfo={this.passinfo3}></BlogLinks>
                <BlogLinks title="titre" content="contenu" picture="" link="" id="5" className="grid-item" passingInfo={this.passinfo3}></BlogLinks>
                <BlogLinks title="titre" content="contenu" picture="" link="" id="6" className="grid-item" passingInfo={this.passinfo3}></BlogLinks>
                
            </div>
        )
    }
}

class GallZone extends Component {
    render() {
        return (
            <div>
                <p>gall</p>
            </div>
        )
    }
}


class PortZone extends Component {
    render() {
        return (
            <div>
                <p>portgolio</p>
            </div>
        )
    }
}


class Blog extends Component{
    constructor(props){
        super(props);
      this.state={
        id:this.props.id  //the blog and the bloglink on the time of creation they ll havr the same id

     }
}
    render(){
        return(
            <div>
              <p>{this.props.title}</p>
              <p>{this.props.text}</p>
            </div>
        )
    }
}

/*var zones=[<HomeZone passingInfo={this.passinfo4}></HomeZone>,<GallZone></GallZone>,<PortZone></PortZone>,<AboutZone></AboutZone>]*/
export default class MainZone extends Component {
    constructor(props){
        super(props)
        this.state={
            id:0
        }
    }
    passinfo4=(childData)=>{
        this.setState({id:childData},()=>{this.props.passingInfo(this.state.id)})

    }
    render() {
        var zones=[<HomeZone passingInfo={this.passinfo4}></HomeZone>,<GallZone></GallZone>,<PortZone></PortZone>,<AboutZone></AboutZone>];
       // console.log(zones)
        /*var a=this.props.zone ;
        var b;
        switch (a){
            case 1: b=<GallZone></GallZone>;
            break;
            case 2:b=<PortZone></PortZone>;
            break;
            case 3:b=<AboutZone></AboutZone>;
            break;
            default:b=<HomeZone passingInfo={this.passinfo4}></HomeZone>;

        }*/
        return(
          
        <div>{ zones[this.props.zone]}</div>
         
        )
    }
}
