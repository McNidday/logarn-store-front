import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import { getProducts } from '../../redux/product_list/ProductActions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../../css/ProductList.css'

function ProductCardList(props) {
    useEffect(() => {
        // Get all the products
        props.getProducts()
    }, [])
    // Load products from database
    return (
        <div className="product-list" data-test="ProductCardList">
            {props.products.map(p => {
                return <ProductCard key={p._id} product={p}></ProductCard>
            })}
        </div>
    )
}

ProductCardList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        categories: PropTypes.arrayOf(PropTypes.string)
    }))
}

const mapStateToProps = state => {
    return {
        products: state.products.products,
        error: state.products.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => dispatch(getProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCardList)
