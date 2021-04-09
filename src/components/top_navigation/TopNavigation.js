import React from 'react'
import '../../css/TopNavigation.css'

function TopNavigation() {
    return (
        <div className='top-navigation' data-test='TopNavigation'>
            <ul>
                <li><a><span>LS</span></a></li>
            </ul>
            <ul>
                <li><a><span>Login</span><span></span></a></li>
                <li><a><span>Cart</span><span></span></a></li>
            </ul>
        </div>
    )
}

export default TopNavigation
