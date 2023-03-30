import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { createWrapper } from "next-redux-wrapper";

//  The reason for setting up redux-toolkit this was is because it's recommended by nextjs, to accomodate SSR

import rentalFormSlice from "../features/rentalFormSlice";
// Lets combined all reducers, just import your slice and add it's name here
const allReducers = combineReducers({
  rentalFormSlice,
});

// Configure store
const configStore = () => {
  return configureStore({
    reducer: allReducers,
  });
};

// Configure Redux persist on client side

export const makeStore = () => {
  //  Check to confirm if we are on client side to persist, because we don't need to persist on server side
  const isServer = typeof window === "undefined";

  if (isServer) {
    return configStore();
  } else {
    // Persiste redux on client side
    const persistConfig = {
      key: "nextjs",
      storage,
    };

    const persistedReducer = persistReducer(persistConfig, allReducers);

    let store = configureStore({
      reducer: persistedReducer,
    });

    store._persistor = persistStore(store);

    return store;
  }
};

// now export the store
export const wrapper = createWrapper(makeStore, { debug: true });
