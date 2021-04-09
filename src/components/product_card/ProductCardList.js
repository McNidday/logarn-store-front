import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import { getProducts } from '../../redux/product_list/ProductActions'
import '../../css/ProductList.css'
import { connect } from 'react-redux'

function ProductCardList(props) {
    useEffect(() => {
        // Get all the products
        props.getProducts()
    }, [])
    // Load products from database
    return (
        <div className="product-list" data-test="ProductList">
            {props.products.map(p => {
                return <ProductCard key={p._id} product={p}></ProductCard>
            })}
        </div>
    )
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
