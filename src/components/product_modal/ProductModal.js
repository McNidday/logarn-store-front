import React from 'react'
import imagePlaceHolder from '../../pictures/whiteshoe.jpg'
import paypalImage from '../../pictures/paypal-button.png'
import '../../css/ProductModal.css'

function ProductModal() {
    return (
        <div className="product-modal">
            <div className="backdrop"></div>
            <div className="modal">
                <div>
                    <div><img src={imagePlaceHolder} /></div>
                    <div>
                        <div><span>Vendor: </span><span>Any</span></div>
                        <div><span>Order Limit: </span><span>1</span></div>
                        <div><span>InStock: </span><span>Yes</span></div>
                        <div><span>Posted On: </span><span>01/04/2020</span></div>
                    </div>
                </div>
                <div>
                    <div><h2>This is the name</h2><p>ahdasdijdaijsd sdiajdijasd sdajsdoasda dasdj</p></div>
                    <div>
                        <div><img src={paypalImage} /></div>
                    </div>
                </div>
                <div className='close-modal'></div>
            </div>
        </div>
    )
}

export default ProductModal
