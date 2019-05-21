import React, { Component } from "react";

class Search extends Component {
    render() {
        return (
        <section className="site-hero overlay" data-stellar-background-ratio="0.5" style={{backgroundImage: 'url(images/big_image_1.jpg)'}}>
            <div className="container">
            <div className="row align-items-center site-hero-inner justify-content-center">
                <div className="col-md-8 text-center">
                <div className="mb-5 element-animate">
                    <h1>Find your perfect place.</h1>
                    <p>Discover &amp; connect with great places around the world.</p>
                </div>
                <form className="form-inline element-animate" id="search-form">
                    <label htmlFor="s" className="sr-only">Location</label>
                    <input type="text" className="form-control form-control-block search-input" id="autocomplete" placeholder="Search Location with Google Search API" onfocus="geolocate()" />
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
                </div>
            </div>
            </div>
        </section>
        );
    }
}

export default Search;