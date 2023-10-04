import * as actionTypes from '../constants/orderConstant';

export const getOrdersReducer = (state = {orders: []}, action) => {
    switch(action.type) {
        case actionTypes.GET_ORDERS_SUCCESS:
            return { orders: action.payload }
        case actionTypes.GET_ORDERS_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};
export const editOrderReducer = (state = { order: {} }, action) => {
    switch (action.type) {
      case actionTypes.EDIT_ORDER_SUCCESS:
        return { order: action.payload };
      case actionTypes.EDIT_ORDER_FAIL:
        return { error: action.payload };
      default:
        return state;
    }
  };