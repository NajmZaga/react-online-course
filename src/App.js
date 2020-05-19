import React, { Component } from 'react';
import ClassCompo from './ClassCompo';

// Component listens to state & props update to re-render
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      bookTitle: 'Origin',
      bookAuthor: 'Dan Brown',
      bookPrice: '20$',
      otherBook: {
        bookTitle: 'The lost symbol',
        bookPrice: '40$'
      },
      toggleShowChild: false
    }
  }

  handleChangeBookTitle = () => {
    this.setState({
      ...this.state,
      bookAuthor: 'Haithem',
      otherBook: {
        ...this.state.otherBook,
        bookTitle: '1000$',
        date: 'sdfsdfsdfsdfsd'
      }
    });
  }

  handleSwitch = () => {
    this.setState({
      ...this.state,
      toggleShowChild: !this.state.toggleShowChild
    });
  }

  // Component lifecycle

  componentWillUpdate() {
    // Do something before the component is updated (updates always listens to state and props changing)
    console.log("-------> Component will update - 3 -");
  }

  componentDidUpdate() {
    // Do something once the component is updated (updates always listens to state and props changing)
    console.log("-------> Component did update - 4 -");
  }

  render() {
    return (
      <div>
        <br />
        The book <b>{ this.state.bookTitle }</b> is written by <b>{ this.state.bookAuthor }</b> and it costs <b>{ this.state.bookPrice }</b>
        <br />
        { this.state.bookAuthor } has also wrote { this.state.otherBook.date }
        <br />
        <button onClick={ this.handleChangeBookTitle }>Change book title</button>
        <br />
        <button onClick={ this.handleSwitch }>Show / Hide</button>
        {
          this.state.toggleShowChild && <ClassCompo />
        }
      </div>
    )
  }
}
