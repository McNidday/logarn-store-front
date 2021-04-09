import { combineReducers } from 'redux'
import ModalReducer from './modal/ModalReducer'
import ProductReducer from './product_list/ProductReducer'

const rootReducer = combineReducers({
    modal: ModalReducer,
    products: ProductReducer
})
export default rootReducer