import React, { Component } from 'react';
import Navbar from '../containers/navbar';
import AboutUsSection from "../containers/about_us_section";
import BespokeTailoringSection from "../containers/bespoke_tailoring_section";
import BlogPosts from "../containers/blog_post_list";
import Carousel from "../containers/carousel";

export default class App extends Component {
  render() {
    return (
        <div>
          <Navbar/>
          <Carousel/>
          <AboutUsSection/>
          <BespokeTailoringSection/>
        </div>
    );
  }
}
