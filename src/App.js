import React, { Component } from 'react';
import CompoOne from './CompoOne';
import CompoTwo from './CompoTwo';

export default class App extends Component {

  /**
   * Lists & Keys
   */

  constructor() {
    super();
    this.state = {
      books: [
        {
          id: 'xamd1',
          title: 'The Prince',
          author: 'Niccolo Machiavelli',
          price: '20$',
        },
        {
          id: 'abcg',
          title: 'The Great Gatsby',
          author: 'F. Scott Fitzgerald',
          price: '10$',
        },
        {
          id: 'rrvh',
          title: 'Digital Fortress',
          author: 'Dan Brown',
          price: '100$',
        }
      ],
      bookId: ''
    }
  }

  getTargetBook = (bookId) => {
    this.setState({
      bookId
    })
  }

  getBook = () => {
    return this.state.books.find(({id}) => id === this.state.bookId);
  }

  render() {
    return (
      <div>
        <CompoTwo books={ this.state.books } onBookChange={ this.getTargetBook } />
        <CompoOne books={ this.state.books } bookId={ this.state.bookId } />

        <br />
        <br />
        <br />
        <br />
        <h2>Book Title: { !!this.state.bookId && this.getBook().title }</h2>
      </div>
    )
  }
}



/*

_____ App.js
     |______ Component 1
     |      |___ state
     |______ Component 2
            |___ state


*/