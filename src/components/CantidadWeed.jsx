import React, { Component } from 'react';
import { connect } from 'react-redux';

class CantidadWeed extends Component {
  render() {
    return (
      <React.Fragment>
        Unidades : {this.props.product.weed}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
    return{
        product: state.product
    }
}

export default connect(mapStateToProps)(CantidadWeed);
