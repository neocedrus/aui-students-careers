import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TopNav from './components/Navigation/TopNav';
import HomePage from './pages/Home';
import MyApplications from './pages/MyApplications';
import JobPostings from './pages/JobPostings';
import MyAccount from './pages/MyAccount';

export default function App() {
  return (
    <div className="h-screen w-full flex">
      <div className="flex-grow ">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/MyApplications" element={<MyApplications />} />
          <Route path="/JobPostings" element={<JobPostings />} />
          <Route path="/Account" element={<MyAccount />} />
        </Routes>
      </div>
    </div>
  );
}