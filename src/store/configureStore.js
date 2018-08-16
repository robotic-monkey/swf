import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import MagicFormReducer from '../reducers/updateForm';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      magicform: MagicFormReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
