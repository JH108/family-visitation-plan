import reduxToolkit from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { deaconsSlice } from './deacons';
import { counterSagas } from './deacons/sagas';
import { familiesSlice } from './families';
import { familySagas } from './families/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = reduxToolkit.configureStore({
	reducer: {
		deaconsSlice: deaconsSlice.reducer,
		familiesSlice: familiesSlice.reducer
	},
	middleware: [sagaMiddleware],
});

const sagas = [
	...counterSagas,
	...familySagas,
];

sagas.forEach(sagaMiddleware.run);

export default store;
