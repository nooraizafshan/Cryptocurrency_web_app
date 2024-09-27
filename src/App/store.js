// import { configureStore } from '@reduxjs/toolkit';
// import { cryptoApi} from '../Services/cryptoApi';
// export default  configureStore({
//     reducer: {
//         [cryptoApi.reducerPath]:cryptoApi.reducer,
//     },
// });

import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../Services/cryptoApi'; // Adjust the import path as needed

const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware),
});

export default store;
