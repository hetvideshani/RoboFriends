import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import './index.css';
import App from './App';
import RobDetails from './RobDetails';
import EditRobo from './EditRobo';
import AddRobo from './AddRobo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/Details/:id" element={<RobDetails />}></Route>
      <Route path="/EditRobo/:id" element={<EditRobo />}></Route>
      <Route path="/AddRobo" element={<AddRobo />}></Route>
    </Routes>
  </BrowserRouter>
);
