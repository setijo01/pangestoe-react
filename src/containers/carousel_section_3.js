import React, {Component} from 'react';
import {connect} from 'react-redux';


export default class CarouselSection3 extends Component{
    render() {

        return (
            <div id='welcome-section' className='image3 section-outer-block d-flex flex-fill justify-content-end align-items-stretch'>
                <div className='container section-inner-block d-flex flex-column col-sm-5'>
                    <div className='text-align-right'>
                        <h4>Whatever your goal is, make sure you’re wearing the right suit when you finally achieve them.</h4>
                    </div>
                    <a href="#footer-section"><div className='button'>BOOK YOUR APPOINTMENT TODAY</div></a>
                </div>
            </div>
        );
    }
}