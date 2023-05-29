import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { createWrapper } from "next-redux-wrapper";

// //  The reason for setting up redux-toolkit this was is because it's recommended by nextjs, to accomodate SSR

import rentalFormSlice from "../features/rentalFormSlice";
// // Lets combined all reducers, just import your slice and add it's name here
const allReducers = combineReducers({
  rentalFormSlice,
});

const configStore = () =>
  configureStore({
    reducer: allReducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
export const makeStore = () => {
  // Persiste redux on client side

  // check to confirm if we're on client side or server
  const isServer = typeof window === "undefined";
  console.log(isServer);

  if (isServer) {
    return configStore();
  } else {
    const persistConfig = {
      key: "nextjs",
      storage,
    };

    const persistedReducer = persistReducer(persistConfig, allReducers);

    let store = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
    });

    store._persistor = persistStore(store);

    return store;
  }
};

// // now export the store
export const wrapper = createWrapper(makeStore, { debug: true });
