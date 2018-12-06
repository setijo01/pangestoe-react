import React, {Component} from 'react';
import {connect} from 'react-redux';


export default class ImageBannerSection1 extends Component{
    render() {

        return (
            <div id='image-banner-section-1' className='section-outer-block container-fluid d-flex flex-fill justify-content-start align-items-stretch'>
                <div className='container section-inner-block d-flex flex-column col-sm-5'>
                    <div className='text-align-left'>
                        <h1>A CUSTOM SUIT FITS ONLY FOR YOU</h1>
                    </div>
                    <div className='text-align-left'>
                        <h4>WE TAILOR A SUIT THAT TELLS YOUR STORY</h4>
                    </div>
                    <div className='button'>BOOK YOUR APPOINTMENT</div>
                </div>
            </div>
        );
    }
}