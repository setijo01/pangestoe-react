import React, {Component} from 'react';
import {connect} from 'react-redux';
import CarouselSection1 from "../containers/carousel_section_1";
import CarouselSection2 from "../containers/carousel_section_2";
import CarouselSection3 from "../containers/carousel_section_3";


export default class Carousel extends Component{
    render() {

        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <div id="carouselIndicators" className="carousel slide" data-ride="carousel" data-interval="3000">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselIndicators" data-slide-to="0" className="active"/>
                            <li data-target="#carouselIndicators" data-slide-to="1"/>
                            <li data-target="#carouselIndicators" data-slide-to="2"/>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <CarouselSection1/>
                            </div>
                            <div className="carousel-item">
                                <CarouselSection2/>
                            </div>
                            <div className="carousel-item">
                                <CarouselSection3/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}