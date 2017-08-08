/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import jquery from 'jquery';
import jQuery_ui from 'jquery-ui';
import metismenu from 'metismenu';
import bootstrap from 'bootstrap';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/font-awesome/css/font-awesome.css';
import './../node_modules/animate.css/animate.min.css';
import './styles/style.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
