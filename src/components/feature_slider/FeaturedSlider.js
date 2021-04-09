import React, { useEffect } from 'react'
import imagePlaceHolder from '../../pictures/whiteshoe.jpg'
import '../../css/FeaturedSlide.css'
import { getFeaturedProduct } from '../../redux/product_list/ProductActions'
import { connect } from 'react-redux'
import { showModal } from '../../redux/modal/ModalActions'

function FeaturedSlider(props) {
    const { featured } = props
    useEffect(() => {
        props.getFeaturedProduct()
    }, [])
    function toggleCloseModal() {
        props.showModal()
    }
    return (
        <div className="featured-slide" data-test={props.featured ? 'showing' : 'not_showing'}>
            <div><img src={imagePlaceHolder} /></div>
            <div>
                <h1>{featured ? featured.name : 'Product name'}</h1>
                <p>The description text right there about this awesome product</p>
            </div>
            <div>
                <button onClick={toggleCloseModal}>Get It Now!</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        featured: state.products.featured
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getFeaturedProduct: () => dispatch(getFeaturedProduct()),
        showModal: () => dispatch(showModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedSlider)
