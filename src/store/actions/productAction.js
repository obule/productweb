import { baseApi, BaseUrl } from '../../config/api';
import axios from 'axios';
export const INSERT_PRODUCT_SUCCESS = 'INSERT_PRODUCT_SUCCESS';
export const INSERT_PRODUCT_ERROR = 'INSERT_PRODUCT_ERROR';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_ERROR = 'GET_PRODUCT_ERROR';

export const addProduct = (productObject, image) => {
  return (dispatch, getState) => {
    baseApi
      .url('product/')
      .post({ ...productObject })
      .json()
      .then(resp => {
        axios
          .patch(`${BaseUrl}product/upload/${resp._id}`, image, {
            // receive two parameter endpoint url ,form data
          })
          .then(resp => {
            // then print response status
            console.log(resp.statusText);
            dispatch({ type: INSERT_PRODUCT_SUCCESS, resp: resp.data });
          });
      })
      .catch(err => {
        dispatch({ type: INSERT_PRODUCT_ERROR, err });
      });
  };
};

export const getProduct = () => {
  return (dispatch, getState) => {
    baseApi
      .url('product/')
      .get()
      .json()
      .then(resp => {
        dispatch({ type: GET_PRODUCT_SUCCESS, resp });
      })
      .catch(err => {
        dispatch({ type: GET_PRODUCT_ERROR, err });
      });
  };
};
