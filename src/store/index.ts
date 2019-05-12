import { applyMiddleware, compose, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
//import reducer from '../reducers';

const composeEnhancers =
  process.env.NODE_ENV === 'development' &&
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(ReduxThunk));

const reducer: any = {}

export interface RootState {
}

export const rootInitialState: RootState = {
}

export const initStore = (initState: RootState) => {
  return createStore(reducer, initState, enhancer)
}