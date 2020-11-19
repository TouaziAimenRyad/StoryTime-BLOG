import React, { Component } from 'react'


class Homebt extends Component {
    render() {
        return (
            <div className="home bt container">
                <p >Home</p>
                
            </div>
        )
    }
}

 class Aboutbt extends Component {
    render() {
        return (
            <div className="about bt container">
                <p >AboutMe</p>
            </div>
        )
    }
}


 class Gallerybt extends Component {
    render() {
        return (
            <div className="gallery bt container">
                <p>Gallery</p>
            </div>
        )
    }
}


 class Portfoliobt extends Component {
    render() {
        return (
            <div  className="portfolio bt container">
                <p>Portfolio</p>
            </div>
        )
    }
}

 class Nav extends Component {
    render() {
        return (
            <div className="nav container-fluid">
                 <Aboutbt></Aboutbt>
                <Homebt></Homebt>
                <Gallerybt></Gallerybt>
                <Portfoliobt></Portfoliobt>
            </div>
        )
    }
}
 export default Nav