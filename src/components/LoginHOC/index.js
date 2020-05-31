import React, { Component } from 'react';

// Higher-Order Component: function takes a component as a parameter
export default (WrappedComponent) => {
  return class extends Component{
    render() {
      let isLoggedIn = localStorage.getItem('isLoggedIn') || false;
      isLoggedIn = JSON.parse(isLoggedIn);
      return <WrappedComponent { ...this.props } isLoggedIn={ isLoggedIn } />
    }
  }
}
