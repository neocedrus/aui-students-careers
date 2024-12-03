import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <div className='flex border h-[15vh] gap-10 items-center jutify-center font-primary'>
      <img src="/AUICONNECT.png" alt="NeoCode Logo" className='w-52' />
      <Link to="/" style={{ display: 'block', margin: '10px 0', textDecoration: 'none' }}>Home</Link>
      <Link to="/my-applications" style={{ display: 'block', margin: '10px 0', textDecoration: 'none' }}>My Applications</Link>
      <Link to="/job-postings" style={{ display: 'block', margin: '10px 0', textDecoration: 'none' }}>Job Postings</Link>
      <Link to="/my/account" style={{ display: 'block', margin: '10px 0', textDecoration: 'none' }}>My Account</Link>
    </div>
  );
}

export default SideNav;