import { combineReducers } from 'redux';
import { servcieReducer } from './services-reducer';
import { cartReducer } from './cart-reducer';

const reducers = combineReducers({
  services: servcieReducer,
  cart: cartReducer,
});

export default reducers;
