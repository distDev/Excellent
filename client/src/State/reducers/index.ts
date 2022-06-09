import { combineReducers } from 'redux';
import { servcieReducer } from './services-reducer';
import { cartReducer } from './cart-reducer';
import { filterReducer } from './filter-reducer';

const reducers = combineReducers({
  services: servcieReducer,
  cart: cartReducer,
  filters: filterReducer,
});

export default reducers;
