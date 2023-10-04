
import { createStore,combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from'redux-devtools-extension';
import thunk from 'redux-thunk';
import { editDeliveryReducer, getDeliveryReducer} from './reducers/deliveryReducer';
import { editOrderReducer, getOrdersReducer } from './reducers/ordersReducer';

const reducer = combineReducers({
    editDelivery:editDeliveryReducer,
    getOrders: getOrdersReducer,
    getDelivery: getDeliveryReducer,
    editOrder:editOrderReducer,

});
const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)
export default store;