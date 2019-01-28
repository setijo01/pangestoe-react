import React, {Component} from 'react';
import {connect} from 'react-redux';


export default class Section2 extends Component{
    render() {

        return (
                <div className="row basic-container">
                    <div id="about-us-section" className="col-xs-12 col-sm-12 col-md-12 section-block">
                        <div className='image6 d-flex flex-fill justify-content-center align-items-stretch'>
                            <div className='container section-smaller-block d-flex justify-content-center flex-column col-sm-5'>
                                <div className='text-align-center'>
                                    <h4>About Us</h4>
                                </div>
                                <div className="text-align-center">
                                    <img className="line-divider" src="https://pangestoe.sgp1.digitaloceanspaces.com/line-divider.png"/>
                                </div>
                                <div className='text-align-center'>
                                    <h1>OUR STORY AND LEGACY</h1>
                                </div>
                                <div className='button'>Learn More</div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}