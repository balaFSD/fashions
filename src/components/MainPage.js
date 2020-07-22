import React from 'react';
import styled from 'styled-components';
import logo2 from '../logo2.svg';

export default function MainPage (){
    return (
        <div className='content '>
        <header className='masthead'>
            <div className='container'>
                {/* <div className='masthead-subheading'>Welcome to</div> */}
                <div className='masthead-heading text-uppercase'>WHITEAGLE FASHION ACCESSORIES</div>
            </div>
        </header>
        <section className=' container col-10 mx-auto col-lg-2 set-bg' style={{backgroundImage:`url{"logo.png"}`}}>
            <img className='img' src={logo2} alt='images'/>
        </section>
        <div className='container'>
            <p className='center'>
                We pride ourselves on our dedication to making sure that our customers can avail the best service possible in our store and our team is always ready to provide guidance on selecting the right products for you.
                 Focusing on the very latest in affordable fashion styles, both attire and stunning accessories, we feature thousands of the newest product lines, providing maximum choice and convenience to our discerning clientele.
                 We take pride in our fact that our clients find us to be honest, courteous and welcoming, and we are always open to give advice and support when needed. We are not just a fashion and accessories store though, we also pride ourselves on our customer service, and we want to make sure we make the customer shopping experience as smooth and painless as possible.
            </p>
        </div>
        </div>
    );
}

// const pageWrapper = styled.div`
// .center {
//     height: 100%;
//     margin:auto;
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-image: logo.png;
//     background-color: lightblue;
//   }
// `;


