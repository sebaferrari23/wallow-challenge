import { configureStore } from '@reduxjs/toolkit';
import meditationsReducer from './modules/meditations/slices';

export const store = configureStore({
  reducer: {
    meditations: meditationsReducer,
  },
});
