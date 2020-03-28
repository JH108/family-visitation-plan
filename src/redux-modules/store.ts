import reduxToolkit from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { counterSlice } from "./deacons";
import { counterSagas } from "./deacons/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = reduxToolkit.configureStore({
  reducer: { counterSlice: counterSlice.reducer },
  middleware: [sagaMiddleware]
});

const sagas = [...counterSagas];
sagas.forEach(sagaMiddleware.run);

export default store;
