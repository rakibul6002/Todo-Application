'use client'
import { store } from '@/Redux/store';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const Layout = ({children}) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default Layout