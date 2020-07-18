import React from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';

class Details extends React.Component{
    render(){
        return (
            <ProductConsumer>
                {value => {
                    const {id,img,title,price,brand,info,inCart}=value.detailProduct;
                    return(
                        <div className='container py-5'>
                            {/* title */}
                            <div className='col-10 mx-auto text-center text-blue text-slanted my-5 '>
                                <h1>{title}</h1>
                            </div>
                            {/* end title */}
                            {/* product info */}
                            <div className='row'>
                                <div className='col-10 mx-auto col-md-6 my-3 text-captitalize'>
                                 <img src={img} alt='product' className='img-fluid'/>
                                </div>
                                {/* product text */}
                                <div className='col-10 mx-auto col-md-6 my-3 text-captitalize'>
                                    <h2>Model:{title}</h2>
                                    <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                                        Made by: <span className='text-uppercase'>{brand}</span>
                                    </h4>
                                    <br></br>
                                    <h4 className='text-blue'>
                                        <strong>
                                            Price: <span>₹</span>{price}
                                        </strong>
                                    </h4>
                                    <h2><p className='text-capitalize font-weight-bold mt-3 mb-0'>
                                        Information About Products:
                                    </p></h2>
                                    <h3><p className='text-muted lead'>{info}</p></h3>
                                    {/* buttons */}
                                    <Link to='/'>
                                        <ButtonContainer>
                                            Back to Products
                                        </ButtonContainer>
                                    </Link>
                                    <ButtonContainer cart disabled={inCart?true:false} onClick={() => {
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}>
                                        {inCart?'In Cart':'Add to Cart'}
                                    </ButtonContainer>
                                </div>
                            </div> 
                        </div>
                        
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;