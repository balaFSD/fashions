import React from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';


class Modal extends React.Component{
    render (){
        return (
            <ProductConsumer>
                {(value) => {
                    const{img,price,title} = value.modalProduct;
                    const{modalOpen,closeModal}= value;

                    if(!modalOpen){
                        return null;
                    } else {
                        return (
                        <ModalContainer>
                            <div className='container pt-5' >
                                <div className='row '>
                                    <div id='modal'  className='col-10 mx-auto col-md-6 text-captitalize text-center p-5'>
                                        <h3> Items added to the cart</h3>
                                        <img src={img} className='image-fluid ui centered medium image' alt='product'/>
                                        <h5>{title}</h5>
                                        <h5 className='text-muted'>price: ₹ {price}</h5>
                                        <Link to='/'>
                                            <ButtonContainer onClick={() => closeModal()}>
                                                Continue shopping 
                                            </ButtonContainer>
                                        </Link>
                                        <Link to='/cart'>
                                            <ButtonContainer onClick={() => closeModal()}>
                                                Go to cart
                                            </ButtonContainer>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </ModalContainer>
                        );
                    }
                }}
            </ProductConsumer>
        );
    }
}

const ModalContainer=styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-item:center;
justify-content:center;
#modal {
    background:var(--mainWhite);
}
`;

export default Modal;