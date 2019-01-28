import React, {Component} from 'react';
import {connect} from 'react-redux';


export default class Section4 extends Component{
    render() {

        return (
                <div id="blog-section" className="row basic-container">
                    <div className="col-xs-12 col-sm-12 col-md-12 section-block">
                        <div className='image9 d-flex flex-fill justify-content-center align-items-stretch'>
                            <form className="d-flex justify-content-center align-items-center">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="sender_name" name="sender_name"
                                           aria-describedby="nameHelp" placeholder="Your name" />
                                        <input type="email" className="form-control" id="sender_email"
                                               name="sender_email" placeholder="Your email" />
                                            <textarea className="form-control" id="message" name="message" rows="7"
                                                      placeholder="Your message"></textarea>
                                            <div className='button-reverse'>Submit Inquiries</div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        );
    }
}