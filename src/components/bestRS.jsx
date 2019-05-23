import React, { Component } from "react";

class BestRS extends Component {
    render() {
        return (
        <section className="site-section">
            <div className="container">
            <div className="row justify-content-center mb-5">
                <div className="col-md-7 text-center">
                <h2>Top Destinations</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum magnam illum maiores adipisci pariatur, eveniet.</p>
                </div>
            </div>
            <div className="row top-destination">
                <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                <a href="#" className="place">
                    <img src="images/img_1.jpg" alt="Image placeholder" />
                    <h2>Trogir, Croatia</h2>
                    <p>Visit This Place</p>
                </a>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                <a href="#" className="place">
                    <img src="images/img_2.jpg" alt="Image placeholder" />
                    <h2>Stockton Beach, Australia</h2>
                    <p>Visit This Place</p>
                </a>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                <a href="#" className="place">
                    <img src="images/img_3.jpg" alt="Image placeholder" />
                    <h2>Desert, Morocco</h2>
                    <p>Visit This Place</p>
                </a>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                <a href="#" className="place">
                    <img src="images/img_4.jpg" alt="Image placeholder" />
                    <h2>Taj Mahal, India</h2>
                    <p>Visit This Place</p>
                </a>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                <a href="#" className="place">
                    <img src="images/img_5.jpg" alt="Image placeholder" />
                    <h2>Eiffel Tower, France</h2>
                    <p>Visit This Place</p>
                </a>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                <a href="#" className="place">
                    <img src="images/img_6.jpg" alt="Image placeholder" />
                    <h2>Opera House, Australia</h2>
                    <p>Visit This Place</p>
                </a>
                </div>
            </div>
            </div>
      </section>
        );
    }
}

export default BestRS;