import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Lista from './components/Lista';
import Detalhes from './components/Detalhes';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Lista />} />
        <Route path="/recipe/:id" element={<Detalhes />} />
      </Routes>
    </Router>
  );
}

export default App;