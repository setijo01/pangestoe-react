import React, {Component} from 'react';
import {connect} from 'react-redux';


export default class Section1 extends Component{
    render() {

        return (
                <div className="row basic-container">
                    <div id="bespoke-section" className="col-xs-12 col-sm-6 col-md-6 section-block">
                        <div className='image4 d-flex flex-fill justify-content-center align-items-stretch'>
                            <div className='container section-smaller-block d-flex justify-content-center flex-column col-sm-5'>
                                <div className='text-align-center'>
                                    <h4>Bespoke Tailoring</h4>
                                </div>
                                <div className="text-align-center">
                                    <img className="line-divider" src="https://pangestoe.sgp1.digitaloceanspaces.com/line-divider.png"/>
                                </div>
                                <div className='text-align-center'>
                                    <h1>Real luxury is understanding quality, and having the time to enjoy it.</h1>
                                </div>
                                <div className='button'>Learn More</div>
                            </div>
                        </div>
                    </div>
                    <div id="commitment-section" className="col-xs-12 col-sm-6 col-md-6 section-block">
                        <div className='image5 d-flex flex-fill justify-content-center align-items-stretch'>
                            <div className='container section-smaller-block d-flex justify-content-center flex-column col-sm-5'>
                                <div className='text-align-center'>
                                    <h4>Our Commitment</h4>
                                </div>
                                <div className="text-align-center">
                                    <img className="line-divider" src="https://pangestoe.sgp1.digitaloceanspaces.com/line-divider.png"/>
                                </div>
                                <div className='text-align-center'>
                                    <h1>We're passionate about quality, and everyone should invest more in quality clothing.</h1>
                                </div>
                                <div className='button'>Click to Find Out</div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}