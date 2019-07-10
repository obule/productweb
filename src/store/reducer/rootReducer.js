import ProductReducer from './ProductReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  product: ProductReducer,
});

export default rootReducer;
