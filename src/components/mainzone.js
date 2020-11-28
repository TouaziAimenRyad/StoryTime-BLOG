import React, { Component } from 'react'
import BlogLinks from './BlogLinks'
//creating block  links from data base will be hear  ki takhdam blog links ou thathom fel home zone f nafss el wa9t hat blogs fel zonzmap



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
                <BlogLinks title="titre" content="contenu" picture="" link="" id="55" className="grid-item" passingInfo={this.passinfo3}></BlogLinks>
                <BlogLinks title="titre" content="contenu" picture="" link="" id="88" className="grid-item" passingInfo={this.passinfo3}></BlogLinks>
                <BlogLinks title="titre" content="contenu" picture="" link="" id="99" className="grid-item" passingInfo={this.passinfo3}></BlogLinks>
                
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


class Blog extends Component{   //apparament the id fel blog mathamach hada how el commentaire lakhar
    constructor(props){ 
        super(props);
      this.state={
        id:this.props.id  //the blog and the bloglink on the time of creation they ll havr the same id ou dir structure mliha bach taccedi el components taw3k 3la hssab id ta3 zone

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
        var zonemap=new Map([   [0,<HomeZone  passingInfo={this.passinfo4}></HomeZone>]  ,  [1,<GallZone></GallZone>]  ,  [2,<PortZone></PortZone>]  ,  [3,<AboutZone></AboutZone>] ,  [parseInt((<Blog id="55" title="bbb" text="jjjj"></Blog>).props.id),<Blog id="55" title="bbb" text="jjjj"></Blog>]  ,   [88,<Blog id="88" title="bjjjbb" text="jjhhhhjj"></Blog>]  , [99,<Blog id="99" title="bjjooojbb" text="jjhhkkkjj"></Blog>] ]);
       // console.log((<Blog id="5" title="nnnn" text="jjjjj"></Blog>).props) // i can access the props
       return(
                 <div>{zonemap.get(parseInt(this.props.zone))}</div>
        )
    }
}
