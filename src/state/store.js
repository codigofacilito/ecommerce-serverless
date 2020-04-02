import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducers";
import { save, load } from 'redux-localstorage-simple';

const reduxCreateStore =  ()=> createStore(
  reducer,
  load(),
  compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default applyMiddleware(
  save()
)(reduxCreateStore);