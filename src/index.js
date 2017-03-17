import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './configureStore';
import Root from './components/Root';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './mystyles.css';

const store = configureStore();

render(
	<Root store={store}/>,
	document.getElementById('root')
);
