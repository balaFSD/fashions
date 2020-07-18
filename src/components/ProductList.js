import React from 'react';
import Product from './Product';
import Title from './Title';
import {storeProducts} from '../data';
import {ProductConsumer} from '../context';

class ProductList extends React.Component{
    state={product: storeProducts}
    render(){
        console.log(this.state.product);
        return (
        <div className='py-5'>
            <div className='container'>
                <Title name='our' title='product' />
                <div className='row'>
                    <ProductConsumer>
                        {(value)=>{
                            return value.products.map(product => {
                                return <Product key={product.id} product={product}/>
                            })
                        }}
                    </ProductConsumer>
                </div>
            </div>
        </div>
        );
    }
}

// C:\Users\ashwini\Desktop\store\public\img\product-1.png.png
// C:\Users\ashwini\Desktop\store\public\img\product-2.png.png

export default ProductList;