/* import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<App />
  , document.getElementById('root'));
  registerServiceWorker(); */

  import React from 'react';
  import ReactDOM from 'react-dom';
  import { Provider } from 'react-redux';
  import { createStore, applyMiddleware } from 'redux';
  import ReduxPromise from 'redux-promise';
  
  import App from './App';
  import reducers from './reducers';
  
  const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
  
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>
    , document.getElementById('root'));
  
