import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog"

import LoginDialog from "@/components/auth/login"

import React from 'react';
import { Link } from 'react-router-dom';
import SignUpDialog from "../auth/sign-up";

const SideNav = () => {
  return (
    <div
      className="flex items-center justify-between px-8 h-20 bg-white shadow-lg sticky top-0 z-50"
    >
      <div className="font-bold text-2xl text-slate-500 hover:text-blue-700 transition-colors">
        AUI Students Careers
      </div>

      <nav className="flex items-center space-x-10">
        <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
          Home
        </Link>
        <Link to="/job-postings" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
          Job Postings
        </Link>
        <Link to="/my-applications" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
          My Applications
        </Link>
        <Link to="/my/account" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
          My Account
        </Link>
      </nav>

      <div className="flex items-center space-x-6">
        <LoginDialog className="px-6 py-2.5 text-slate-600 hover:text-slate-700 font-semibold transition-colors border-2 border-transparent hover:bg-gray-100 rounded-3xl">
          Login
        </LoginDialog>
        <SignUpDialog className="px-6 py-2.5 bg-slate-600 text-white font-semibold rounded-3xl hover:bg-slate-700 transform transition-all duration-200 hover:shadow-lg active:scale-95">
          Sign Up
        </SignUpDialog>
      </div>
    </div>

  );
}

export default SideNav;