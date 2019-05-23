import React, { Component } from "react";

class Search extends Component {
    render() {
        return (
        <section className="site-hero overlay fixed-bg" data-stellar-background-ratio="0.5" style={{backgroundImage: 'url(images/big_image_1.jpg)'}}>
            <div className="container">
            <div className="row align-items-center site-hero-inner justify-content-center">
                <div className="col-md-8 text-center">
                <div className="mb-5">
                    <h1>Temukan Rumah Sakit Sesuai dengan Kebutuhanmu</h1>
                    <p>Discover &amp; find the nearest hospital</p>
                </div>
                <form className="form-inline" id="search-form">
                    <label htmlFor="s" className="sr-only">Nama Rumah Sakit</label>
                    <input type="text" className="form-control form-control-block search-input" id="autocomplete" placeholder="Nama Rumah Sakit, Fasilitas, Penyakit" onfocus="geolocate()" />
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