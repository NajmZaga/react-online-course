import React, { Component } from 'react'

export default class ClassCompo extends Component {

  componentWillMount() {
    // Do something before the component mount (will be rendered)
    console.log("-------> Will mount from child - 2 -");
  }

  componentDidMount() {
    // Do something once the component is mount (is rendered)
    console.log("-------> did mount from child - 1 -");
  }

  componentWillUnmount() {
    // Do something before the component unmount (before it has been removed from the DOM)
    console.log("-------> will unmount from child - 5 -");
  }

  render() {
    return (
      <div>
        <b>This is my child component</b>
      </div>
    )
  }
}
