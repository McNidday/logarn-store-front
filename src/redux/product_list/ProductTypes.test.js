import types from './ProductTypes'
import ProductReducer from './ProductReducer'

describe('Product Types', () => {
    it(types.SUCCESS_LOADING_FEATURED_PRODUCT, () => {
        expect(types.SUCCESS_LOADING_FEATURED_PRODUCT).toBe('SUCCESS_LOADING_FEATURED_PRODUCT')
    })
    it(types.ERROR_LOADING_PRODUCTS, () => {
        expect(types.ERROR_LOADING_PRODUCTS).toBe('ERROR_LOADING_PRODUCTS')
    })
    it(types.SUCCESS_LOADING_FEATURED_PRODUCT, () => {
        expect(types.SUCCESS_LOADING_FEATURED_PRODUCT).toBe('SUCCESS_LOADING_FEATURED_PRODUCT')
    })
    it(types.ERROR_LOADING_FEATURED_PRODUCT, () => {
        expect(types.ERROR_LOADING_FEATURED_PRODUCT).toBe('ERROR_LOADING_FEATURED_PRODUCT')
    })
})