import React from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import CartList from './CartList';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartTotals from './CartTotals';

class Cart extends React.Component{
    render(){
        return (
        <section>
          <ProductConsumer>
            {value => {
              const {cart} = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name='Your' title='Cart'/>
                  <CartColumns/>
                  <CartList value={value}/>
                  <CartTotals value={value} history={this.props.history}/>
                </React.Fragment>
              );
            } else {
              return <EmptyCart/>;
            }
            } }
          </ProductConsumer>
        </section>);
    }
}

export default Cart;