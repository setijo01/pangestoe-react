import React, {Component} from 'react';
import {connect} from 'react-redux';


export default class Navbar extends Component{
    render() {

        return (
            <nav className="navbar fixed-top navbar-light navbar-expand-lg bg-light d-flex justify-content-between">
                <a className="navbar-brand">
                    <img src='https://pangestoe.sgp1.digitaloceanspaces.com/logo.png' height='96' alt=''/>
                </a>
                <div className='link-container flex-column d-flex align-items-end'>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-align-right" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="#about-us-section">About Us</a>
                        <a className="nav-item nav-link" href="#bespoke-tailoring-section">Bespoke Tailoring</a>
                        <a className="nav-item nav-link" href="#blog-section">Blog</a>
                        <a className="nav-item nav-link" href="#contact-section">Contact</a>
                    </div>
                </div>
                </div>

            </nav>

        );
    }
}
