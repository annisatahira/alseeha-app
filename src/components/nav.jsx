import React, { Component } from "react";

class Nav extends Component {
    render() {
        return (
            <header role="banner">
            <nav className="navbar navbar-expand-md navbar-dark bg-light">
              <div className="container">
                <a className="navbar-brand" href="index.html">ALSEEHA</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse navbar-light" id="navbarsExample05">
                  <ul className="navbar-nav ml-auto pl-lg-5 pl-0">
                    <li className="nav-item">
                      <a className="nav-link active" href="index.html">Home</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="destination.html" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Rumah Sakit</a>
                      <div className="dropdown-menu" aria-labelledby="dropdown04">
                        <a className="dropdown-item" href="destination.html">Rumah Sakit BPJS</a>
                        <a className="dropdown-item" href="destination.html">Rumuh Sakit Umum</a>
                        <a className="dropdown-item" href="destination.html">Klinik</a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="blog.html">Artikel</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="about.html">Tentang</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
        );
    }
}

export default Nav;