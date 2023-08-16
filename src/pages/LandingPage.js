/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import Header from 'parts/Header';
import Hero from 'parts/Hero';
import Service from 'parts/Service';
import Portfolio from 'parts/Portfolio';
import Advantage from 'parts/Advantage';
// import Testimonial from 'parts/Testimonial';
import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';
import Data from 'json/landingPage.json';
// import GridAdvantage from 'parts/GridAdvantage';

export default class LandingPage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.ref = React.createRef();
  // }

  // componentDidMount() {
  //   window.scrollTo(0, 0);
  // }

  // ref = React.useRef(null);

  // handleClick = () => {
  //   ref.current?.scrollIntoView({ behavior: 'smooth' });
  // };

  constructor(props) {
    super(props);
    this.portfolioRef = React.createRef();
  }

  handleScrollToPortfolio = () => {
    console.log('work');

    this.portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  render() {
    return (
      <>
        <Header {...this.props} scrollToPortfolio={this.handleScrollToPortfolio} />
        <Hero {...this.props} />
        <Service data={Data.service} />
        <div ref={this.portfolioRef}>
          <Portfolio data={Data.portfolio} />
        </div>
        <Advantage data={Data.advantage} />
        {/* <GridAdvantage /> */}
        {/* <Testimonial data={Data.testimonial} /> */}
        <Discuss />
        <Footer />
      </>
    );
  }
}
