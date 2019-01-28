import React, {Component} from 'react';
import {connect} from 'react-redux';


export default class CarouselSection2 extends Component{
    render() {

        return (
            <div id='welcome-section' className='image2 section-outer-block d-flex flex-fill justify-content-start align-items-stretch'>
                <div className='container section-inner-block d-flex flex-column col-sm-5'>
                    <div className='text-align-left'>
                        <h1>A CUSTOM SUIT FITS ONLY FOR YOU</h1>
                    </div>
                    <div className='text-align-left'>
                        <h4>WE TAILOR A SUIT THAT TELLS YOUR STORY</h4>
                    </div>
                    <a href="#footer-section"><div className='button'>BOOK YOUR APPOINTMENT</div></a>
                </div>
            </div>
        );
    }
}