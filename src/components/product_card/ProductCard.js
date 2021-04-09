import React from 'react'
import { connect } from 'react-redux'
import imagePlaceHolder from '../../pictures/whiteshoe.jpg'
import { showModal } from '../../redux/modal/ModalActions'

function ProductCard(props) {
    const { product } = props
    // console.log(product, 'Produuuuuuct')
    function toggleShowModal() {
        props.showModal()
    }

    return (
        <div className="product-list-card" data-test="ProductCard">
            <div><img src={imagePlaceHolder} />
                <div></div>
                <div onClick={toggleShowModal}>
                    <span>Aquire</span><span></span>
                </div>
            </div>

            <div>
                <div><h4>{product.name}</h4><span>- $10.00</span></div>
                <div></div>
            </div>
            <div>
                Some lorem impsum dammit
                </div>
            <div>
                {product.categories.map(c => <h5>{c}</h5>)}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        active: state.modal.active
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showModal: () => dispatch(showModal())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)
