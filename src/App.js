import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Jobs from './pages/Jobs.js';
import Clients from './pages/Clients.js';
import Home from './pages/Home.js';
import Candidates from './pages/Candidates.js';
import Calendar from './pages/Calendar.js';
import Reports from './pages/Reports.js';
import Rewards from './pages/Rewards.js'

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/home" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/rewards" element={<Rewards />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;