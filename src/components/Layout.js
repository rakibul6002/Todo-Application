'use client'
import { store } from '@/Redux/store';
import React from 'react';
import { Provider } from 'react-redux';

const Layout = ({children}) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default Layout