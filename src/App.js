import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import HistoryPage from './components/HistoryPage';
import WordDetailsPage from './components/WordDetailsPage';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/history" element={<HistoryPage />} /> 
        <Route path="/word/:word" element={<WordDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;

