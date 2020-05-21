import React, { Component } from 'react';
import Forms from './Forms';

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
      ]
    }
  }

  // 0 1 2 3 4 5 6 7 8 9
  // a b c d e f g h i j


  // Key = element -> update - remove - add

  renderList = (books) => {
    return books.map(book => (
      <li key={book.id}>
        <b>Title: </b>{ book.title }
        <br />
        <b>Author: </b>{ book.author }
        <br />
        <b>Price: </b>{ book.price }
        <hr />
      </li>
    ))
  }

  render() {
    return (
      <div>
        <Forms books={ this.state.books } />
      {/* 
      <ul>
      //   {
      //     // this.renderList(this.state.books)
      //   }
      // </ul>
      */}
      </div>
    )
  }
}
