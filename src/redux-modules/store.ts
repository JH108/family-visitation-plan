import reduxToolkit from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { deaconsSlice } from './deacons';
import { counterSagas } from './deacons/sagas';
import { familiesSlice } from './families';
import { familySagas } from './families/sagas';
import { peopleSlice } from './people';
import { peopleSagas } from './people/sagas';
import { visitsSlice } from './visits';
import { visitSagas } from './visits/sagas';
const sagaMiddleware = createSagaMiddleware();

const store = reduxToolkit.configureStore({
	reducer: {
		deaconsSlice: deaconsSlice.reducer,
		familiesSlice: familiesSlice.reducer,
		peopleSlice: peopleSlice.reducer,
		visitsSlice: visitsSlice.reducer,
	},
	middleware: [sagaMiddleware],
});

const sagas = [
	...counterSagas,
	...familySagas,
	...peopleSagas,
	...visitSagas,
];

sagas.forEach(sagaMiddleware.run);

export default store;
