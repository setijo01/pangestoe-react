import React, {Component} from 'react';
import {connect} from 'react-redux';


export default class AboutUsSection extends Component{
    render() {

        return (
            <div id='about-us-section' className='section-outer-block container-fluid d-flex flex-fill justify-content-center align-items-stretch'>
                <div className='container section-inner-block-2nth d-flex flex-column align-items-center'>
                    <div className='header-title'>
                        <div className='upper-border container'/>
                        <div className='text-align-center'>
                            <h1>About Us</h1>
                        </div>
                        <div className='text-align-center'>
                            <h4>OUR STORY AND COMMITMENT</h4>
                        </div>
                        <div className='bottom-border container'/>
                    </div>
                    <div className='text-container container'>
                        Continuing heritage from previous generation of New Mico Tailor Est.1971, Pangestoe bespoke was
                        founded by Marco Pangestu & Marvin Pangestu in 2016. Our goal is to make an elegant, timeless,
                        and well-fitted cloth with modern approach without leaving traditional method in the craftsmanship.
                    </div>
                    <div className='text-container container'>
                        We are only using finest fabrics & materials around the world, combined with our experience
                        and commitment, we are exist to produce exclusively high quality clothes for our clients.
                        Fit & quality is our main priority in crafting a cloth, since every human body not created equal,
                        using <a href='#'>Bespoke Tailoring</a> method will ensure the fit which flatter your
                        overall look. Our experience & commitment will ensure every cloth we make to fit you.
                    </div>
                </div>
            </div>
        );
    }
}