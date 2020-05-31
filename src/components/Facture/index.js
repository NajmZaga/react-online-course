import React from 'react';
import LoggedHOC from './../LoginHOC';
import PropTypes from 'prop-types';

class Facture extends React.Component {
  render(){
    console.log(this.props);
    if (!this.props.isLoggedIn) return <h1>You should signin</h1>;
    return (
      <>
        <h1>Hello {this.props.username}</h1>
        {
          !!this.props.additionalInfos && (
            <div>{ this.props.additionalInfos }</div>
          )
        }
      </>
    );
  }
}

Facture.propTypes = {
  username: PropTypes.string.isRequired,
  additionalInfos: PropTypes.string,
}

Facture = LoggedHOC(Facture);

export default Facture;