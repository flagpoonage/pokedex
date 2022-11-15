import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './elements/Header';

export function Root() {
  return (
    <div style={{ maxWidth: '800px' }}>
      <Header />
      <Outlet />
    </div>
  );
}
