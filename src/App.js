
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Jobs from './components/Jobs';
import ApplyStart from './components/ApplyStart';
import ApplyFinish from './components/ApplyFinish';
import './App.css';

function App() {
  return (
    <main>
            <Routes>
                <Route path="/" element={<Jobs/>} />
                <Route path="/jobs/apply-start" element={<ApplyStart/>} />
                <Route path="/jobs/apply-finish" element={<ApplyFinish/>} />
            </Routes>
        </main>
  );
}

export default App;
