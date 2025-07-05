
import Header from '@/components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className=''>
      <div className="grid-background"></div>
      <main className='min-h-screen '>
        <Header/>
        <Outlet />
      </main>
      <div className="p-10 text-center bg-zinc-1000 mt-10">
        Made with 💗 by Shaurya Rajput
      </div>

    </div>
  );
}

export default AppLayout;
