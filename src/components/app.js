import React, { Component } from 'react';
import Navbar from '../containers/navbar';
import Carousel from "../containers/carousel";
import Section1 from "../containers/section1";
import Section2 from "../containers/section2";
import Footer from "../containers/footer";
import Section3 from "../containers/section3";
import Section4 from "../containers/section4";

export default class App extends Component {
  render() {
    return (
        <div className="container-fluid">
          <Navbar/>
          <Carousel/>
          <Section1/>
          <Section2/>
            <Section3/>
            <Section4/>
          <Footer/>
        </div>
    );
  }
}
