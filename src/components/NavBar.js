import React from 'react';
import {Link} from 'react-router-dom';
import logo1 from '../logo1.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

class NavBar extends React.Component{
    render(){
        return (
            <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                {/* https://www.iconfinder.com/iconsets/harry-potter-solid-collection */}
                <Link to='/'>
                    <img  src={logo1} alt='store' className="navbar-brand"/>
                </Link>
                <ul className='navbar-nav align-items-center'>
                    <li className="nav-item ml-5 ">
                        <Link to='/' className="nav-link ">
                            <ButtonContainer>Product</ButtonContainer>
                        </Link>
                    </li>
                </ul>
                <Link to='/Cart' className="ml-auto">
                       <ButtonContainer >
                       <span className='mr-2'>
                       <i className="shopping cart icon"></i>
                       </span>
                       my cart
                       </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
background: var(--mainDark) !important;
.nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform: capitalize;
}
`;

export default NavBar;