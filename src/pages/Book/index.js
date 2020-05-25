import React, { Component } from 'react';

export default class Book extends Component {

  constructor () {
    super();
    this.state = {
      books: [
        {
          id: '1',
          title: "The Da Vinci Code",
          price: "10$",
        },
        {
          id: '2',
          title: "Origin",
          price: "70$",
        },
        {
          id: '3',
          title: "The Lost Symbol",
          price: "40$",
        }
      ],
      targetBook: {}
    }
  }

  getBookById = (id, bookList) => bookList.find(book => book.id === id);

  componentDidMount() {
    this.setState({
      ...this.state,
      targetBook: this.getBookById(this.props.match.params.id, this.state.books)
    });
  }

  render() {

    if (!this.props.match.params.id) return <h1>No selected book</h1>

    return (
      <div>
        <b>Book page: { !!this.state.targetBook && this.state.targetBook.title }</b>
      </div>
    )
  }
}
