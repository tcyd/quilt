import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import todoReducer from './reducers/todoReducer';
import DevTools from './containers/DevTools'

const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware),
  DevTools.instrument()
)(createStore);

const rootReducer = combineReducers({
  todo: todoReducer
});

export default function configureStore(initialState) {
   return finalCreateStore(rootReducer, initialState);
}
