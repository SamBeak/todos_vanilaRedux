import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from './wrap/HomeComponent';
import HeaderComponent from './wrap/HeaderComponent';
import { Provider } from 'react-redux';
import store from '../store';

export default function WrapComponent() {
  return (
    <Provider store = {store} >
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HeaderComponent />}>
                  <Route index element={<HomeComponent />} />
                  <Route path="/home" element={<HomeComponent />} />
              </Route>
          </Routes>
      </BrowserRouter>
    </Provider>
  )
}
