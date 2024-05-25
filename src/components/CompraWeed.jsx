import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buyWeedAction, returnWeedAction } from '../redux/actions/productShopAction'; // Importa las acciones

class CompraWeed extends Component {
  render() {
    return (
      <div>
        <button className='btn btn.dark btnsm mb-2' onClick={() => {
            this.props.buyWeedAction(1);
        }}>Comprar gramo</button>
        <button className='btn btn.dark btnsm' onClick={() => {
            this.props.returnWeedAction(1);
        }}>Regresar gramo</button>
     </div>
    );
  }
}

// Mapea las acciones como props
const mapDispatchToProps = {
    buyWeedAction,
    returnWeedAction
};

export default connect(null, mapDispatchToProps)(CompraWeed);
