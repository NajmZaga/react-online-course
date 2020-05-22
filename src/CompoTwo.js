import React, { Component } from 'react';

export default class CompoTwo extends Component {

  handleBookChange = (e) => {
    this.props.onBookChange(e.target.value);
  }

  render() {

    return (
      <select onChange={ this.handleBookChange }>
        {
          this.props.books.map(book => <option key={book.id} value={ book.id }>{ book.title }</option>)
        }
      </select>
    )
  }
}
