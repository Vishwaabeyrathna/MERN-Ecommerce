import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen w-full bg-gradient-to-r from-zinc-900 via-black to-zinc-800 text-white">
      {/* Left Panel */}
      <div className="flex w-1/2 items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-700 via-indigo-800 to-black opacity-70 z-0 animate-pulse"></div>
        <div className="relative z-10 max-w-md text-center space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight animate-fade-up">
            Welcome to <span className="text-primary">Ecommerce Shopping</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover amazing products. Login or register to get started.
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex flex-1 items-center justify-center bg-white text-zinc-800 px-6 py-12 sm:px-8 lg:px-12 dark:bg-zinc-900 dark:text-white transition-colors duration-300">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;