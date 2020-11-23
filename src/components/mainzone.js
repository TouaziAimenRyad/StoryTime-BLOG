import React, { Component } from 'react'
import BlogLinks from './BlogLinks'


class AboutZone extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

 class HomeZone extends Component {
    render() {
        return (
            <div className="grid-container ">
                <BlogLinks title="titre" content="contenu" className="grid-item"></BlogLinks>
                <BlogLinks title="titre" content="contenu" className="grid-item"></BlogLinks>
                <BlogLinks title="titre" content="contenu" className="grid-item"></BlogLinks>
                
            </div>
        )
    }
}

class GallZone extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}


class PortZone extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

var zones=[<HomeZone></HomeZone>,<GallZone></GallZone>,<PortZone></PortZone>,<AboutZone></AboutZone>]
export default class MainZone extends Component {
    render() {
        return(
            zones[this.props.zone]
        )
    }
}
