import React, { Component } from 'react';

export default class CompoOne extends Component {

  componentDidUpdate() {
    
  }

  render() {
    const book = this.props.books.find(({id}) => id === this.props.bookId);
    return (
      <div>
        {
          book ?
          (
            <div>
              <br />
              <br />
              <br />
              <br />
              <div>{ book.title }</div>
              <div>{ book.author }</div>
            </div>
          )
          :
          (<ul>
          {
            this.props.books.map(book => (
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
        </ul>)
        }
      </div>
    )
  }
}
