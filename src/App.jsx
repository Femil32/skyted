import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
// Layout
import Layout from './layout';
// pages
import Home from './pages/Home';

function App() {
  return (
    <Suspense fallback="Loading ...">
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route index path="/about" element={<Home />} />
        </Route>
        <Route index path="*" element={<p> not found</p>} />
      </Routes>
    </Suspense>
  );
}

export default App;
