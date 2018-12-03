import React, { Component } from 'react';
import Navbar from '../containers/navbar';
import WelcomeSection from '../containers/welcome_section';
import AboutUsSection from "../containers/about_us_section";
import ImageBannerSection1 from "../containers/image_banner_section_1";
import BespokeTailoringSection from "../containers/bespoke_tailoring_section";
import ImageBannerSection2 from "../containers/image_banner_section_2";
import BlogPosts from "../containers/blog_post_list";

export default class App extends Component {
  render() {
    return (
        <div>
          <Navbar/>
          <WelcomeSection/>
          <AboutUsSection/>
          <ImageBannerSection1/>
          <BespokeTailoringSection/>
          <ImageBannerSection2/>
          <BlogPosts/>
        </div>
    );
  }
}
