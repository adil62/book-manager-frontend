import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import {MdHome, MdAddCircle, MdRemoveRedEye, MdFiberNew, MdSettings} from "react-icons/md";

const SideNav = (props) => {
    
    const StyledNav = styled.div`
        background-color : #fff ;
        flex: 0 1 13%;
        height: calc(100% - 80px);
        
        ul li {
            list-style: none;
            margin: 23px  0;
            color: #858891;
            display: flex;
            user-select: none;
        }  

        ul li a {
            text-decoration: none;
            color: #858891;
        } 

        .activeLink {
            color: #723BDA;
        }

        ul {
            margin-top: 30px;
            padding-left: 13px;
        }

        .settings-li {
            margin-top : 40%;
        }

        li svg {
            margin-right : 8px;
        }
    `;    

    return (
        <StyledNav>
            <ul>
                <li>
                    <NavLink exact activeClassName="activeLink" to='/'>
                        <MdHome /> Home
                    </NavLink> 
                </li>
                <li>
                    <NavLink activeClassName="activeLink" to='/book/add'>
                        <MdAddCircle /> Add Books
                    </NavLink> 
                </li>
                <li>
                    <NavLink activeClassName="activeLink" to='/book/view'>  
                        <MdRemoveRedEye /> View Books
                    </NavLink> 
                </li>
                <li> 
                    <NavLink activeClassName="activeLink" to="/book/request"> 
                        <MdFiberNew /> Request Books
                    </NavLink> 
                </li>
                <li className="settings-li"> 
                    <NavLink activeClassName="activeLink" to='/contact'> 
                        <MdSettings /> Settings
                    </NavLink> 
                </li>
            </ul>
        </StyledNav>
    )
}

export default SideNav
// rafce