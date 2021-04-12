import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
  count: 0,
  step: 1
};

function reducer ( state = initialState, action) {
  switch(action.type) {
    case "INCREMENT" : {
      return {
        ...state,
        count: state.count + state.step
      }
    }
    case "DECREMENT" :{
      return {
        ...state,
        count: state.count - state.step
      }
    }
    case 'setStep': {
      return {
        ...state,
        step: action.newStep,
      }
    }
    default:{
      return state;
    }
  }
}
const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
