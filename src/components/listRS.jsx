import React, { Component } from "react";

class ListRS extends Component {
    render() {
        return (
            <section className="feature-destination">
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                <a href="#" className="img-bg" style={{backgroundImage: 'url("images/img_2.jpg")'}}>
                    <div className="text">
                    <span className="icon ion-ios-location" />
                    <h2>Stockton Beach, Austrlia</h2>
                    <p>Visit This Place</p>
                    </div>
                </a>
                </div>
                <div className="col-md-4">
                <a href="#" className="img-bg" style={{backgroundImage: 'url("images/img_1.jpg")'}}>
                    <div className="text">
                    <span className="icon ion-ios-location" />
                    <h2>Trogir, Croatia</h2>
                    <p>Visit This Place</p>
                    </div>
                </a>
                </div>
                <div className="col-md-4">
                <a href="#" className="img-bg last" style={{backgroundImage: 'url("images/img_3.jpg")'}}>
                    <div className="text">
                    <span className="icon ion-ios-location" />
                    <h2>Desert, Morocco</h2>
                    <p>Visit This Place</p>
                    </div>
                </a>
                </div>
            </div>
            </div>
        </section>
        );
    }
}

export default ListRS;