import types from './ModalTypes'
const { SUCCESS_LOADING_PRODUCT_DATA, ERROR_LOADING_PRODUCT_DATA, SUCCESS_CLOSING_MODAL } = types

const initialState = {
    error: false,
    active: false,
    product: false
}

const ModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_LOADING_PRODUCT_DATA: return {
            ...state,
            active: true,
            product: action.payload
        }
        case ERROR_LOADING_PRODUCT_DATA: return {
            ...state,
            active: true,
            error: action.payload
        }
        case SUCCESS_CLOSING_MODAL: return {
            ...state,
            active: false,
            product: false
        }
        default: return state
    }
}

export default ModalReducer