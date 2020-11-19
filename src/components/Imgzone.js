import React, { Component } from 'react'
//import imgLink from '../imgs/img.jpg'


export default class Imgzone extends Component {
    render() {
        return (
            <div className="imgzone">
                <img src={this.props.img} alt="didn't load"></img>
            </div>
        )
    }
}
