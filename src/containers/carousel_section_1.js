import React, {Component} from 'react';
import {connect} from 'react-redux';


export default class CarouselSection1 extends Component{
    render() {

        return (
            <div id='welcome-section' className='image1 section-outer-block container-fluid d-flex flex-fill justify-content-end align-items-stretch'>
                <div className='container section-inner-block d-flex flex-column col-sm-5'>
                    <div className='text-align-right'>
                        <h1>UNRIVALED WARDROBE</h1>
                    </div>
                    <div className='text-align-right'>
                        <h4>WE CREATE CLASSIC MENSWEAR USING THE BEST FABRIC FROM ALL AROUND THE WORLD</h4>
                    </div>
                    <div className='button'>BOOK YOUR APPOINTMENT</div>
                </div>
            </div>
        );
    }
}