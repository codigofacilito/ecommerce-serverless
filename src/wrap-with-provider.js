import React from 'react';
import { Provider } from 'react-redux';


import createStore from './state/store';

export default ({element})=>{
  const store = createStore();
  return <Provider store={store}>{element}</Provider>
}