import React, {Component} from 'react';
import {connect} from 'react-redux';


export default class Section3 extends Component{
    render() {

        return (
                <div className="row basic-container">
                    <div id="gallery-section" className="col-xs-12 col-sm-6 col-md-6 section-block">
                        <div className='image7 d-flex flex-fill justify-content-center align-items-stretch'>
                            <div className='container section-smaller-block d-flex justify-content-center flex-column col-sm-5'>
                                <div className='text-align-center'>
                                    <h4>Gallery</h4>
                                </div>
                                <div className="text-align-center">
                                    <img className="line-divider" src="https://pangestoe.sgp1.digitaloceanspaces.com/line-divider.png"/>
                                </div>
                                <div className='text-align-center'>
                                    <h1>FOLLOW US ON INSTAGRAM</h1>
                                    <a href="https://www.instagram.com/pangestoe_bespoke/?hl=en"><div className='button'>Our Instagram Account</div></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="blog-section" className="col-xs-12 col-sm-6 col-md-6 section-block">
                        <div className='image8 d-flex flex-fill justify-content-center align-items-stretch'>
                            <div className='container section-smaller-block d-flex justify-content-center flex-column col-sm-5'>
                                <div className='text-align-center'>
                                    <h4>Blog</h4>
                                </div>
                                <div className="text-align-center">
                                    <img className="line-divider" src="https://pangestoe.sgp1.digitaloceanspaces.com/line-divider.png"/>
                                </div>
                                <div className='text-align-center'>
                                    <h1>COMING SOON</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}