import React, { Component } from 'react';

export default class Forms extends Component {

  // React tags value holders= input, textarea and select

  constructor() {
    super();
    this.state = {}
  }

  handleInputChange = (e) => {
    console.log('Input value', e.target.value);
  }

  handleTextareaChange = (e) => {
    console.log('Textarea value', e.target.value);
  }

  handleSelectChange = (e) => {
    console.log(this.findBook(e.target.value, this.props.books));
  }

  findBook = (id, books) => books.find(book => book.id === id);

  renderSelectList = (books) => {
    return (
      <select onChange={ this.handleSelectChange }>
        {
          books.map(book => <option key={ book.id } value={book.id}>{ book.title }</option>)
        }
      </select>
    )
  } 

  render() {
    return(
      <form>
        <input placeholder="Text here" onChange={this.handleInputChange} />
        <br />
        <textarea placeholder="Enter some text" onChange={ this.handleTextareaChange } />
        <br />
        {
          this.renderSelectList(this.props.books)
        }
        <h1>Selected book title: { this.state.selectedBook }</h1>
      </form>
    )
  }
}