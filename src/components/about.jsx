import React, { Component } from "react";

class About extends Component {
    render() {
        return (
        <section className="section-cover fixed-bg" data-stellar-background-ratio="0.5" style={{backgroundImage: 'url(images/big_image_2.jpg)'}}>
            <div className="container">
            <div className="row justify-content-center align-items-center intro">
                <div className="col-md-7 text-center">
                <h2>Get 10% off On Your Next Travel</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quidem tempore expedita facere facilis, dolores!</p>
                <p><a href="#" className="btn btn-black">Get Started</a></p>
                </div>
            </div>
            </div>
        </section>
        );
    }
}

export default About;