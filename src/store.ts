import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export default function configureStore(initialState = {
  currentTab: 0,
  tabData: [
    {
      data: [
        {
          name: 'John',
          job: 'Striker',
        },
        {

        },
        {

        },
      ],
      title: 'Ninjas',
      activePage: 0,
    },
    {
      data: [],
      activePage: 0,
    },
    {
      data: [],
      activePage: 0,
    },
  ],
}) {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}