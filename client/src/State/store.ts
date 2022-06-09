import { AnyAction, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkDispatch } from 'redux-thunk';
import reducers from './reducers';
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
  useDispatch,
} from 'react-redux';
import { loadState, saveState } from '../Utils/localStorage';
import throttle from 'lodash/throttle';
import { IRootState } from '../Types/serviceInterface';

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

export const useAppSelector: TypedUseSelectorHook<IRootState> =
  useReduxSelector;

export const storeState = store.getState();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () =>
  useDispatch<ThunkDispatch<IRootState, unknown, AnyAction>>();
