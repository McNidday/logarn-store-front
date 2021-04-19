import types from './ProductTypes'
import ProductReducer from './ProductReducer'

describe('Product Reducer', () => {
    let state, product, productsArray
    beforeEach(() => {
        state = {
            error: false,
            products: [],
            featured: false,
            featuredError: false
        }

        product = {
            _id: 'kakdaslkdlaksdjlkasjdlad',
            name: 'nidday',
            categories: ['awesome', 'jobs', 'grit', 'hardwork']
        }

        productsArray = [product]
    })

    it('should return poducts on success', () => {
        const expectedState = {
            ...state,
            products: productsArray
        }

        const newState = ProductReducer(undefined, {
            type: types.SUCCESS_LOADING_PRODUCTS,
            payload: productsArray
        })
        expect(newState).toEqual(expectedState)
    })

    it('should return error on error loading products', () => {
        const expectedState = {
            ...state,
            error: 'This is the error'
        }

        const newState = ProductReducer(undefined, {
            type: types.ERROR_LOADING_PRODUCTS,
            payload: 'This is the error'
        })

        expect(newState).toEqual(expectedState)
    })

    it('should return featured product successfully', () => {
        const expectedState = {
            ...state,
            featured: product
        }

        const newState = ProductReducer(undefined, {
            type: types.SUCCESS_LOADING_FEATURED_PRODUCT,
            payload: product
        })

        expect(newState).toEqual(expectedState)
    })

    it('should return error on failing to load featured product', () => {
        const expectedState = {
            ...state,
            featuredError: true
        }

        const newState = ProductReducer(undefined, {
            type: types.ERROR_LOADING_FEATURED_PRODUCT,
        })

        expect(newState).toEqual(expectedState)
    })
})