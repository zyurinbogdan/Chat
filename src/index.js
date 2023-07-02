import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { SignInPage } from '../src/pages/signInPage';
import { SignUpPage } from '../src/pages/signUpPage';
import { NotFound } from './pages/notFoundPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path='/sign-up' element={<SignUpPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

