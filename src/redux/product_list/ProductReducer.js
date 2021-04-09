import types from './ProductTypes'
const { SUCCESS_LOADING_PRODUCTS, ERROR_LOADING_PRODUCTS, SUCCESS_LOADING_FEATURED_PRODUCT, ERROR_LOADING_FEATURED_PRODUCT } = types
const initialState = {
    error: false,
    products: [],
    featured: false,
    featuredError: false
}

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_LOADING_PRODUCTS: return {
            ...state,
            products: action.payload,
            error: false
        }
        case ERROR_LOADING_PRODUCTS: return {
            ...state,
            products: [],
            error: action.payload
        }
        case SUCCESS_LOADING_FEATURED_PRODUCT: return {
            ...state,
            featured: action.payload
        }
        case ERROR_LOADING_FEATURED_PRODUCT: return {
            ...state,
            featuredError: true
        }
        default: return state
    }
}

export default ProductReducer