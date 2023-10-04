
import axios from "axios";
import * as actionTypes from '../constants/orderConstant';
const URL = 'http://localhost:7000';

export const getOrders = () => async(dispatch) => {
    try {
        const {data} = await axios.get(`${URL}/orders`);

        dispatch({type: actionTypes.GET_ORDERS_SUCCESS, payload:data })
    } 
    catch (error) {
        dispatch({type: actionTypes.GET_ORDERS_FAIL,payload:error.message})
    }
}
export const editOrder = (formData, orderId,index) => async (dispatch) => {
    if (orderId) {
      try {
        const response = await axios.put(`${URL}/orders/${orderId}/${index}`, formData);
        const updatedOrder = response.data;
        dispatch({
          type: actionTypes.EDIT_ORDER_SUCCESS,
          payload: updatedOrder,
        });
      } catch (error) {
        dispatch({
          type: actionTypes.EDIT_ORDER_FAIL,
          payload: error.message,
        });
      }
    } else {
      console.error('ORDERId is undefined'); 
    }
  };