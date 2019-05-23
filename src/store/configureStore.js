import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import MagicFormReducerSWF from '../reducers/updateFormSWF';
import MagicFormReducerDOTE from '../reducers/updateFormDOTE';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      magicformSWF: MagicFormReducerSWF,
      magicformDOTE: MagicFormReducerDOTE
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
