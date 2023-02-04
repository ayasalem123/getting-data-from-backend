
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import datared  from './reducer'
export const Store = configureStore({
  reducer: {
    data:datared,
  },
  middleware: [thunk],
})
