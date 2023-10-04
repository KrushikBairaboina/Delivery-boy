
import axios from "axios";
import * as actionTypes from '../constants/deliveryConstant';
const URL = 'http://localhost:7000';
export const editDelivery = (deliveryData, deliveryId) => async (dispatch) => {
    if (deliveryId) {
      try {
        const response = await axios.put(`${URL}/account/${deliveryId}`, deliveryData);
        const updatedDelivery = response.data;
        dispatch({
          type: actionTypes.EDIT_DELIVERY_SUCCESS,
          payload: updatedDelivery,
        });
      } catch (error) {
        dispatch({
          type: actionTypes.EDIT_DELIVERY_FAIL,
          payload: error.message,
        });
      }
    } else {
      console.error('DeliveryId is undefined'); 
    }
  };
  export const getDelivery = () => async(dispatch) => {
    try {
        const {data} = await axios.get(`${URL}/dlist`);

        dispatch({type: actionTypes.GET_Delivery_SUCCESS, payload:data })
    } 
    catch (error) {
        dispatch({type: actionTypes.GET_Delivery_FAIL,payload:error.message})
    }
}