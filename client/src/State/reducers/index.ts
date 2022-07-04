import { combineReducers } from 'redux';
import { servcieReducer } from './services-reducer';
import { cartReducer } from './cart-reducer';
import { filterReducer } from './filter-reducer';
import { userReducer } from './user-reducer';
import { themeReducer } from './theme-reducer';

const reducers = combineReducers({
  services: servcieReducer,
  cart: cartReducer,
  filters: filterReducer,
  user: userReducer,
  theme: themeReducer,
});

export default reducers;
