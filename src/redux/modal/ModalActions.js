import types from "./ModalTypes"

function successLoadingProductData() {
    return {
        type: types.SUCCESS_LOADING_PRODUCT_DATA,
    }
}

export function showModal() {
    return function (dispatch) {
        // Get the data with product id from the local storage
        dispatch(successLoadingProductData())
    }
}

function successClosingModal() {
    return {
        type: types.SUCCESS_CLOSING_MODAL
    }
}

export function closeModal() {
    return function (dispatch) {
        dispatch(successClosingModal())
    }
}