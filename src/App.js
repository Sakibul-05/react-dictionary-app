import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import HistoryPage from './components/HistoryPage';
import WordDetailsPage from './components/WordDetailsPage';

const App = () => {
  return (
    <HashRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/history" element={<HistoryPage />} /> 
        <Route path="/word/:word" element={<WordDetailsPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;

