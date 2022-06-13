import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <ul className="nav">
                <li className="nav-item">
                    <Link to ='/peoples'>Persons</Link>
                </li>
                <li className="nav-item">
                    <Link to ='/about'>About</Link>
                </li>
                <li className="nav-item">
                    
                </li>
                <li className="nav-item">
                    
                </li>
            </ul>
        </div>
    );
};

export default Header;