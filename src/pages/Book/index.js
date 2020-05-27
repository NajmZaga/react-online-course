import React, { Component } from 'react';
import { books, getBookById } from './../../utils/books-utils';

export default class Book extends Component {

  constructor () {
    super();
    this.state = {
      targetBook: {}
    }
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      targetBook: getBookById(this.props.match.params.id, books)
    });
  }

  // React Fragments:
  // <Fragment></Fragment>: Long hand
  // <></>: Short hand

  render() {

    if (!this.props.match.params.id) return <h1>No selected book</h1>

    return (
      <>
        <div>Book title: { !!this.state.targetBook && this.state.targetBook.title }</div>
        <div>Book price: { !!this.state.targetBook && this.state.targetBook.price }</div>
      </>
    )
  }
}
