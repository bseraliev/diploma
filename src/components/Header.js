import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderSection = styled.header`
    padding:35px 0;
`

const HeaderLogo = styled.div`
    a{
        font-weight:700;
        color:#000;
        text-decoration:none;
        font-size:24px;
    }
`

const Ul = styled.ul`
    margin-bottom:0!important;
    a{
        font-size:16px;
        color: #100A30;
        margin-right:40px;
        transition:all 0.3s ease; 
        cursor:pointer;
        text-decoration:none;
    }
    li:last-child a{
        margin-right:0;
        color:#fff;
        background: #624DE3;
        border-radius: 6px;
        padding:12px 24px;
    }
    a:hover{
        color:#624DE3;
    }
    li:last-child:hover a{
        color:#fff;
    }
`   

const Header = ({isLogged}) => {
  return (
    <HeaderSection>   
        <div className="container">
            <div className="d-flex align-items-center justify-content-between">
                <HeaderLogo>
                    <NavLink to="/">
                        CiscoSDU
                    </NavLink>
                </HeaderLogo>
                <div>
                    <nav>
                        <Ul className="d-flex align-items-center">
                            <li><NavLink to={isLogged ? `/labs` : '/login'}>Labs</NavLink></li>
                            <li><NavLink to={isLogged ? `/courses` : '/login'}>Courses</NavLink></li>
                            <li><NavLink to={isLogged ? `/faq` : '/login'}>FAQ</NavLink></li>
                            <li><NavLink to={isLogged ? `/contact` : '/login'}>ContactUs</NavLink></li>
                            <li><NavLink to="/login">Login</NavLink></li>
                        </Ul>
                    </nav>
                </div>
            </div>
        </div>
    </HeaderSection>
  )
}

export default Header