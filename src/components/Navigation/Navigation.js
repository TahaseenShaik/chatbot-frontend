import React from 'react';
import './Navigation.css';
const Navigation = () => {
    return (
        <div className='navbar'>
            <div className='navBody'>
                <a href='/' >OrderBody</a>
                <div>
                    <nav>
                        <ul >
                            <li> <a href="#">Home</a></li>
                            <li> <a href="#">Orders</a></li>
                            <li> <a href="#">About</a></li>
                            <li> <a href="#">Contact Us</a></li>

                        </ul>
                    </nav>
                </div>
            </div>

        </div>
    )
}
export default Navigation;