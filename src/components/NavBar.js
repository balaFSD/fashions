import React from 'react';
import {Link} from 'react-router-dom';
import logo1 from '../logo1.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

class NavBar extends React.Component{
    render(){
        return (
            <NavWrapper className="navbar navbar-expand-lg bg-primary navbar-dark px-sm-5 ui menu ">
                {/* https://www.iconfinder.com/iconsets/harry-potter-solid-collection */}
                <Link to='/'>
                    <img  src={logo1} alt='store' className="navbar-brand"/>
                </Link>
                <ul className='navbar-nav align-items-center ml-5'>
                <li className="item ">
                        <Link to='/' className="nav-link ">
                            Home
                        </Link>
                    </li>
                    <li className="item ">
                        <Link to='/product' className="nav-link ">
                            Product
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