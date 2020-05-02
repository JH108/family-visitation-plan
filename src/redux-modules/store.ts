import { AsyncStorage } from 'react-native';
import reduxToolkit, { combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import { deaconsSlice } from './deacons';
import { counterSagas } from './deacons/sagas';
import { familiesSlice } from './families';
import { familySagas } from './families/sagas';
import { peopleSlice } from './people';
import { peopleSagas } from './people/sagas';
import { visitsSlice } from './visits';
import { visitSagas } from './visits/sagas';

const version = 1;

const persistConfig = {
	key: 'root',
	version,
	storage: AsyncStorage,
};


const sagas = [
	...counterSagas,
	...familySagas,
	...peopleSagas,
	...visitSagas,
];
const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
		deaconsSlice: deaconsSlice.reducer,
		familiesSlice: familiesSlice.reducer,
		peopleSlice: peopleSlice.reducer,
		visitsSlice: visitsSlice.reducer,
});

export type IState = ReturnType<typeof reducer>;

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = reduxToolkit.configureStore({
	reducer: persistedReducer,
	middleware: [sagaMiddleware],
});

sagas.forEach(sagaMiddleware.run);

export const persistor = persistStore(store);
