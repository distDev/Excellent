import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
  useDispatch,
} from 'react-redux';
import { loadState, saveState } from '../Utils/localStorage';
import throttle from 'lodash/throttle';

const persistedState = loadState();

export const store = createStore(
  reducers,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(
  throttle(() => {
    saveState({
      cart: store.getState().cart,
    });
  }, 1000)
);

export let storeState = store.getState();

export const useAppSelector: TypedUseSelectorHook<typeof storeState> =
  useReduxSelector;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
