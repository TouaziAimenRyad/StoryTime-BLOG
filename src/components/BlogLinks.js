import React, { Component } from 'react'
import '../styles/style.css';

export default class BlogLinks extends Component {
    render() {
        return (
            <div class="col-sm-4">
            <div class="card">
              <div class="image">
                <img src="http://loremflickr.com/320/150?random=4" alt="img" />
              </div>
              <div class="card-inner">
                <div class="header">
                 <h2>{this.props.title}</h2>
              </div>
              <div class="content">
                  <p>{this.props.content}</p>
              </div>
                </div>
            </div>
          </div>
        )
    }
}
