import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../asset/crown.svg';
import rape from '../../asset/rape.mp4'
import './header.styles.scss';

const Header = () => (
    <div className="header">
        <Link className='logo-container' to='/'>
            <video className='videoTag' autoPlay loop muted>
                <source src={rape} type='video/mp4' />
            </video>
        </Link>
        <div className="options">
            <Link className='option' to='/girls'>
                SHOP
            </Link>
            <Link className='option' to='/girls'>
                CONTACT
            </Link>
        </div>

    </div>
)


export default Header;