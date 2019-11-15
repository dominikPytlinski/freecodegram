import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() 
    {
        return (
            <header>
                <div className="brand">
                    Company Name
                </div>
                <div className="menu">
                    <ul>
                       <li><NavLink to="#">test</NavLink></li>
                       <li><NavLink to="#">test</NavLink></li>
                       <li><NavLink to="#">test</NavLink></li> 
                    </ul>
                </div>
            </header>
        )
    }
}

export default Navbar
