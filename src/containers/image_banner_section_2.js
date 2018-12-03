import React, {Component} from 'react';
import {connect} from 'react-redux';


export default class ImageBannerSection2 extends Component{
    render() {

        return (
            <div id='image-banner-section-2' className='section-outer-block container-fluid d-flex flex-fill justify-content-center align-items-stretch'>
                <div className='container section-inner-block d-flex flex-column col-sm-5'>
                    <div className='text-align-center'>
                        <h1>YOU ARE ONLY ONE STEP AWAY FROM YOUR DREAM SUIT</h1>
                    </div>
                    <div className='button'>BOOK YOUR FITTING TODAY</div>
                </div>
            </div>
        );
    }
}