import store from './reducers';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const configureStore = () => {
	const middlewares = [thunk];
	// if (process.env.NODE_ENV === 'production') {
	// 	console.log = () => 0;
	// } else {
	// 	middlewares.push(createLogger());
	// }
	middlewares.push(createLogger());

	return createStore(
		store,
		applyMiddleware(...middlewares)
	);
};

export default configureStore;