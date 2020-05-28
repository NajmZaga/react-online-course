import React, { Component } from 'react';

export class Container extends Component {

  render() {

    const btnText = this.props.theme === 'light' ? 'dark' : 'light';

    return (
      <div className={`container ${ this.props.theme }`}>
        <h1>Actual Theme: <i>{ this.props.theme }</i></h1>
        <button onClick={ () => this.props.onChangeTheme() }>Set { btnText } theme</button>
      </div>
    )
  }
}
