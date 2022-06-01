import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux';

export const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

let storeState = store.getState();

export const useAppSelector: TypedUseSelectorHook<typeof storeState> =
  useReduxSelector;
