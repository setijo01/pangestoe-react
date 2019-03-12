import React, {Component} from 'react';
import {connect} from 'react-redux';


export default class Navbar extends Component{
    render() {

        return (
            <nav className="navbar fixed-top navbar-light navbar-expand-sm bg-light d-flex flex-column align-items-center" id="navbar">
                <div className="logo-container d-flex justify-content-center">
                    <div className="info-container d-flex justify-content-start col-xs-4 col-md-4">
                        <a href="tel:+62216499760"><i className="icon fas fa-phone fa-lg"></i></a><span className="text-helper"> 021-6499760</span>
                        <a href="mailto:info@pangestoebespoke.com"><i className="icon fas fa-envelope fa-lg"></i></a><span className="text-helper"> info@pangestoebespoke.com</span>
                    </div>

                    <div className="social-media-container flex-fill d-flex justify-content-end col-xs-4 col-md-4">
                        <a href="https://www.instagram.com/pangestoe_bespoke/?hl=en"><i className="icon fab fa-instagram fa-lg"></i></a><span className="text-helper"> @pangestoe_bespoke</span>
                    </div>
                </div>
                <div className='link-container flex-column d-flex align-items-center'>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbar-items">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-align-center" id="navbar-items">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link" href="#bespoke-section"><span>Bespoke Tailoring</span></a>
                            <a className="nav-item nav-link" href="#about-us-section"><span>About Us</span></a>
                            <div className="logo flex-fill d-flex justify-content-center col-xs-4 col-md-4">
                                <a className="navbar-brand">
                                    <img src='https://pangestoe.sgp1.digitaloceanspaces.com/logo.png' height='96' alt=''/>
                                </a>
                            </div>
                            <a className="nav-item nav-link" href="#gallery-section"><span>Gallery</span></a>
                            <a className="nav-item nav-link" href="#blog-section"><span>Blog</span></a>
                            <a className="nav-item nav-link" href="#footer-section"><span>Contact</span></a>
                        </div>
                    </div>
                </div>

            </nav>

        );
    }
}
