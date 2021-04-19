import React from 'react'
import '../../css/TopNavigation.css'
import Button from '../button/Button'

function TopNavigation() {
    return (
        <div className='top-navigation' data-test='TopNavigation'>
            <ul data-test='Logo'>
                <li><a><span>LS</span></a></li>
            </ul>
            <Button></Button>
            <ul>
                <li data-test='LoginLink'><a><span>Login</span><span></span></a></li>
                <li data-test='CartLink'><a><span>Cart</span><span></span></a></li>
            </ul>
        </div>
    )
}

export default TopNavigation
