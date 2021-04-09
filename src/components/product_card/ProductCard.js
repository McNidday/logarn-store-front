import React from 'react'
import imagePlaceHolder from '../../pictures/whiteshoe.jpg'

function ProductCard() {
    return (
        <div className="product-list-card">
            <div><img src={imagePlaceHolder} />
                <div></div>
                <div>
                    <span>Aquire</span><span></span>
                </div>
            </div>

            <div>
                <div><h2>Shoes</h2><span>- $10.00</span></div>
                <div></div>
            </div>
            <div>
                Some lorem impsum dammit
                </div>
            <div><h5>nidda</h5><h5>Kefa</h5><h5>Kenar</h5></div>
        </div>
    )
}

export default ProductCard
