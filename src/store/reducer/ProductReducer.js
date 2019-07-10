import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_SUCCESS,
  INSERT_PRODUCT_ERROR,
  INSERT_PRODUCT_SUCCESS,
} from '../actions/productAction';

const initialState = {
  productError: null,
  singleProduct: null,
  allProduct: null,
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_PRODUCT_SUCCESS:
      return {
        ...state,
        singleProduct: action.resp,
        productError: null,
      };
    case INSERT_PRODUCT_ERROR:
      return {
        ...state,
        singleProduct: null,
        productError: action.err,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        productError: null,
        allProduct: action.resp,
      };
    case GET_PRODUCT_ERROR:
      return {
        ...state,
        allProduct: null,
        productError: action.err,
      };

    default:
      return initialState;
  }
};

export default ProductReducer;
