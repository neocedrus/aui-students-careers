import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TopNav from './components/navigation/top-nav';
import HomePage from './pages/home';
import MyApplications from './pages/my-applications';
import JobPostings from './pages/job-posting';
import MyAccount from './pages/my-account';

export default function App() {
  return (
    <div className="h-screen w-full flex">
      <div className="flex-grow">
        <TopNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/my-applications" element={<MyApplications />} />
          <Route path="/job-postings" element={<JobPostings />} />
          <Route path="/my/account" element={<MyAccount />} />
        </Routes>
      </div>
    </div>
  );
}