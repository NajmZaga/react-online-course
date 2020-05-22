import React, { Component } from 'react'

export default class Layout extends Component {
  render() {
    console.log(this.props);
    
    return (
      <div>
        { this.props.layoutHeadr }
        { this.props.layoutSider }
        { this.props.layoutContent }
        { this.props.layoutFooter }
      </div>
    )
  }
}
