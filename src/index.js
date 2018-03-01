import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddForm from '../src/containers/add_form';
import App from '../src/App';

const store = configureStore(); // You can also pass in an initialState here

render(
    <Provider store={store}>
        {/* <App /> */}
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/addResearcher" component={AddForm} />
                    <Route path="/" component={App} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);