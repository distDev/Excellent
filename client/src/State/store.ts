import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
  useDispatch,
} from 'react-redux';

export const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export let storeState = store.getState();

export const useAppSelector: TypedUseSelectorHook<typeof storeState> =
  useReduxSelector;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
