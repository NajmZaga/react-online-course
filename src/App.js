import React, { Component } from 'react';
import Content from './CompoOne';
import Sider from './CompoTwo';
import Header from './Header';
import Footer from './Footer';
import Layout from './Layout';

export default class App extends Component {

  render() {

    const companyName = "Taki";

    return (
      <Layout
        layoutHeadr={ <Header companyName={ companyName } /> }
        layoutSider={ <Sider /> }
        layoutContent={ <Content /> }
        layoutFooter={ <Footer /> }
      />
    )
  }
}
