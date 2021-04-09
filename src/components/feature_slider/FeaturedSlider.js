import React from 'react'
import imagePlaceHolder from '../../pictures/whiteshoe.jpg'
import '../../css/FeaturedSlide.css'

function FeaturedSlider() {
    return (
        <div className="featured-slide">
            <div><img src={imagePlaceHolder} /></div>
            <div>
                <h1>The propotion text</h1>
                <p>The description text right there</p>
            </div>
            <div>
                <button>Get It Now!</button>
            </div>
        </div>
    )
}

export default FeaturedSlider
