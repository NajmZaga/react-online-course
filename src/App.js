import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Book from './pages/Book';

export default class App extends Component {

  render() {

    return (
      <Router>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/book/1'>Book</Link>
          </li>
        </ul>

        <Route exact path='/' component={ Home }></Route>
        <Route exact path='/about' component={ About }></Route>
        <Route exact path='/contact' component={ Contact }></Route>
        <Route path='/book/:id?' component={ Book }></Route>
        {/* <Route path='/**' component={ NotFound }></Route> */}

      </Router>
    )
  }
}



/* 


const route = '/about;
const link = '/';

route.includes(link) <-----

if route === link 



*/