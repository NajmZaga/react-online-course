import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// import pages
import Home from './../pages/Home';
import About from './../pages/About';
import Contact from './../pages/Contact';
import Book from './../pages/Book';

export default class Routes extends Component {

  constructor() {
    super();
    this.state = {
      routes: [
        {
          path: '/',
          component: Home,
          exact: true,
        },
        {
          path: '/about',
          component: About,
          exact: true,
        },
        {
          path: '/contact',
          component: Contact,
          exact: true,
        },
        {
          path: '/book/:id?',
          component: Book,
        }
      ]
    }
  }

  render() {
    return (
      <Switch>
        {
          this.state.routes.map(route => (
            <Route key={ route.path } exact={ route.exact } path={  route.path} component={ route.component }></Route>
          ))
        }
      </Switch>
    )
  }
}
