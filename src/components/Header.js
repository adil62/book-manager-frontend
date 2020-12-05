import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import { MdSearch, MdNotifications, MdKeyboardArrowDown, MdPowerSettingsNew } from "react-icons/md";
import {useSelector, useDispatch} from 'react-redux'
import {profileSectionClickedActionCreator, closeProfileDropdownActionCreator} from '../redux/actions'
import {useClickOutside} from '../hooks/useClickOutside'

import logo from '../assets/logo/sidebar_logo.png';
import userLogo from '../assets/logo/profile_logo.jpg';
 
const Header = () => {
    console.log('RENDERING HEADER!')
    const dispatch = useDispatch() 
    const ref = useRef()
    const isDropDownOpen = useSelector(state => state.isUserProfileDropDownOpen)

    const StyledHeader = styled.div`
        width: 100%;
        height: 80px;
        background-color: #fff;
        box-shadow: 0px 7px 10px -9px rgba(0,0,0,0.45);
        display: flex ;

        .image-container {
            flex: 0 0 13%;
        }    

        .image-container img {
            width: 49px;
            margin-top: 10px;
            display: block;
            margin-left: auto;
            margin-right: auto;
            transition: 0.4s cubic-bezier(0.45, 0.05, 0.55, 0.95);
        }
      
        .image-container img:hover {
            transform: scale(1.2);
        }

        ul {
            color: black;
            flex-basis: 100%;
            display: flex;
            padding:0 ; margin: 0;
        }
        
        ul li {
            list-style: none;
            user-select : none;
        }
        
        ul .search-bar {
            display: flex;
            align-items: center;
            border: none;
        }
       
        ul .search-bar input {
            border: none;
            padding: 10px 5px;
        }
       
        ul .search-bar input:focus {
            border: none;
            background-color: #fff9f9;
            outline: none;
        }

        ul .search-bar .search-icon {
            margin-right: 5px;
        }

        .emptyLi {
            width: 66%;
        }

        .notification-wrapper {
            flex-basis: 2%;
            margin-right: 1em;
            display: flex;
            align-items : center;
            cursor:pointer;
        }
        .profile-wrapper {
            width: 13%;
            border-radius: 100px;
            display: flex;
            align-items: center;
            cursor:pointer;
            position: relative;
        }
        .profile-wrapper img {
            width: 28px;
            border-radius: 100px;
        }
        
        .profile-wrapper .username {
            margin-left: 0.6em;
            color: #A2A5B8;
        }
    `;
    
    const StyledDropDown = styled.div`
        position: absolute;
        bottom: -105%;
        width: 141px;
        display: ${isDropDownOpen ? 'flex' : 'none'};
        align-items: center;
        background-color: #ffffff;
        height: 83px;
        border-radius: 0px 0px 7px 9px;
        justify-content: center;
        box-shadow: 0px 7px 10px -9px rgba(0,0,0,0.45);
        cursor: default;

        span {
            cursor : pointer;
        }
    `;    
    
    useClickOutside(ref, () => {
        closeDashboard()
    })    

    const openDashboard = (event) => {
        dispatch(profileSectionClickedActionCreator())
    }
   
    const closeDashboard = () => {
        console.log('dropdown state' + isDropDownOpen);

        if (isDropDownOpen) {   
            dispatch(closeProfileDropdownActionCreator())
        }
    }    
     
    return (
        <StyledHeader>
            <div className="image-container"> 
                <img src={logo} />
            </div>
            <ul>
                <li className="search-bar">  
                    <MdSearch size={'1.2em'} className="search-icon" />  
                    <input type="text" placeholder="Search..." /> 
                </li> 
                <li className="emptyLi"></li>
                <li className="notification-wrapper">
                    <MdNotifications color={"#A2A5B8"} size={'1.4em'}/>  
                </li>
                <li className="profile-wrapper" ref={ref} onClick={openDashboard} >
                    <img src={userLogo} />
                    <span className="username"> Adil Ismail </span>    
                    <MdKeyboardArrowDown color="#A2A5B8"  size={'1.7em'}/>

                    <StyledDropDown>
                        <span> <MdPowerSettingsNew />  Logout </span>     
                          
                    </StyledDropDown>
                </li>
            </ul> 
        </StyledHeader>
    )
}

export default Header