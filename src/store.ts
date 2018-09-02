import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export default function configureStore(initialState = {
  activeTab: 0,
  data: [],
  offset: 0,
}) {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}