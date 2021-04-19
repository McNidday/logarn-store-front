import types from './ProductTypes'
import axios from 'axios'

function successLoadingProducts(payload) {
    return {
        type: types.SUCCESS_LOADING_PRODUCTS,
        payload: payload
    }
}
function errorLoadingProducts(payload) {
    return {
        type: types.SUCCESS_LOADING_PRODUCTS,
        payload: payload
    }
}
export function getProducts() {
    return function (dispatch) {
        // If success
        const query = {
            query: `{
                getProducts {
                  _id
                  name
                  imageurl
                  categories
                  active
                  createdAt
                }
              }`
        }
        axios.post('http://localhost:8080/graphql', query)
            .then(response => {
                const products = response.data.data.getProducts
                dispatch(successLoadingProducts(products))
            }).catch(error => {
                dispatch(errorLoadingProducts(error.response.data))
            })
    }
}

function successLoadingFeaturedProduct(payload) {
    return {
        type: types.SUCCESS_LOADING_FEATURED_PRODUCT,
        payload: payload
    }
}
function errorLoadingFeaturedProduct(payload) {
    return {
        type: types.ERROR_LOADING_FEATURED_PRODUCT,
        payload: payload
    }
}

export function getFeaturedProduct() {
    return function (dispatch) {
        // If success
        const query = {
            query: `{
                getFeaturedProduct {
                  _id
                  name
                  imageurl
                  categories
                  active
                  createdAt
                }
              }`
        }

        axios.post('http://localhost:8080/graphql', query)
            .then(response => {
                const product = response.data.data.getFeaturedProduct
                dispatch(successLoadingFeaturedProduct(product))
            }).catch(error => {
                dispatch(errorLoadingFeaturedProduct(error.response.data))
            })
    }
}
