import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export default function configureStore(initialState = {
  currentTab: 0,
  tabData: [
    {
      activePage: 0,
      data: [
        {
          job: 'Striker',
          name: 'John',
        },
        {

        },
        {

        },
      ],
      title: 'Ninjas',
    },
    {
      activePage: 0,
      data: [],
    },
    {
      activePage: 0,
      data: [],
    },
  ],
}) {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}