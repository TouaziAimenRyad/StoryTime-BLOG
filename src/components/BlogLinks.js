import React, { Component } from 'react'
import '../styles/style.css';

export default class BlogLinks extends Component {
  constructor(props){
    super(props)
    this.state={
      id:this.props.id
    }
  }
  trigger=(event)=>{
    this.props.passingInfo(this.state.id);
    event.preventDefault();
   
  }
    render() {
        return (
          <div className="card" style={{width:"18rem"}} >
          <img src="" className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
        <p className="card-text">{this.props.content}</p>
            <button  className="btn btn-primary" onClick={this.trigger}>Read more</button>
          </div>
        </div>
        
        )
    }
}
