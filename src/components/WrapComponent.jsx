import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from './wrap/HomeComponent';
import HeaderComponent from './wrap/HeaderComponent';

export default function WrapComponent() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HeaderComponent />}>
                <Route index element={<HomeComponent />} />
                <Route path="/home" element={<HomeComponent />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
