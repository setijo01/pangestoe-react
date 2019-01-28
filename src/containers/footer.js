import React, {Component} from 'react';
import {connect} from 'react-redux';


export default class Footer extends Component{
    render() {

        return (
                <div className="row basic-container">
                    <div id="about-us-section" className="col-xs-12 col-sm-12 col-md-12 footer">
                        <div className='d-flex flex-fill justify-content-center align-items-stretch footer-content'>
                            <div className="footer-subcontent col-xs-12 col-sm-4 col-md-4">
                                <img src='https://pangestoe.sgp1.digitaloceanspaces.com/logo-invert.png' height='96' alt=''/>
                            </div>
                            <div className="footer-subcontent col-xs-12 col-sm-4 col-md-4">
                                <h5 className="widget-title">Address</h5>
                                <p>Jl. Hayam Wuruk No. 68a</p>
                                <p>Jakarta, Indonesia</p>
                                <p>10120</p>
                                <a href='https://goo.gl/maps/mkeZ1QszA3u'><div className='button'>Get Direction</div></a>
                            </div>
                            <div className=" footer-subcontent col-xs-12 col-sm-4 col-md-4">
                                <h5 className="widget-title">Recent News</h5>
                                <div className='button'>Read More</div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}