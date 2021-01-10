import React, { Component } from 'react'
import axios from 'axios'
export default class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            id:0,
            title:'',
            snippet:'',
            message:''
        }
    }
  
  
    changehandler =(e)=>{
        this.setState({ [e.target.name]:e.target.value })
    }

    
    submithandler=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/blogs',this.state).then((req,res)=>{
            console.log("posted to data base")
            console.log(req)
          window.location.reload(false)

        }).catch((err)=>{
            console.log(err)

        })

    }


    render() {
        const {id,title,snippet,message}=this.state

        return (
                <div className="container-fluid form  ">
                <form onSubmit={this.submithandler}>
                        <div className="card titdiv rounded-0">
                            <div className="titdiv card-header p-0">
                                <div className="  text-center py-2">
                                    <h3 id="formtit"> ADD BLOG</h3>
                                </div>
                            </div>
                            <div className="card-body p-3">
                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <input type="number" className="form-control bg-warning"  name="id" placeholder="blog id" value={id}  onChange={this.changehandler} required></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <input type="text" className="form-control bg-warning"  name="title" placeholder="enter title"  value={title}  onChange={this.changehandler} required></input>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <input type="text" className="form-control bg-warning"  name="snippet" placeholder="enter snippet"  value={snippet}  onChange={this.changehandler} required></input>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <textarea className="form-control bg-warning" name="message" placeholder="...blog content"  value={message} onChange={this.changehandler} required></textarea>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <input type="submit" value="save blog" className="btn  btn-lg btn-outline-warning"></input>
                                </div>
                            </div>

                        </div>
                    </form>
                    </div>
        )
    }
}
