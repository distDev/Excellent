import { combineReducers } from 'redux';
import { servcieReducer } from './services-reducer';

const reducers = combineReducers({
  services: servcieReducer,
});

export default reducers;
