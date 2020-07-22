import React from 'react';

export default function CartColumns () {
    return (
        <div className='container-fluid text-center d-none d-lg-block'>
            <div className='row'>
                <div className='col-10 mx-auto col-lg-2'>
                    <h4 className='text-uppercase'>Products</h4>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <h4 className='text-uppercase'>Name of product</h4>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <h4 className='text-uppercase'>price</h4>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <h4 className='text-uppercase'>quantity</h4>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <h4 className='text-uppercase'>remove</h4>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <h4 className='text-uppercase'>total</h4>
                </div>
            </div>
        </div>
    );
}