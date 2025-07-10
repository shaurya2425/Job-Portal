
import Header from '@/components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className=''>
      <div className="grid-background "></div>
      <main className='h-[100%]'>
        <Header/>
        <Outlet />
      </main>
      <div className="mt-23 relative text-center bg-zinc-1000 ">
        Made with 💗 by Shaurya Rajput
      </div>

    </div>
  );
}

export default AppLayout;
