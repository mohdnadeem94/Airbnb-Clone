import React from 'react'
import SearchIcon from '@material-ui/icons/Search';  
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar} from '@material-ui/core';
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
              <img src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="" className="header_icon"/>
            </Link>
           
            <div className="header_center">
                <input type="text" />
                <Link to='/search'>
                    <SearchIcon/>
                </Link>
            </div>

            <div className="header_right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />  
            </div>
        </div>
    )
}

export default Header
