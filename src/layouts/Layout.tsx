import React from 'react';
import { LayoutProps } from '../types';
import { Navbar } from '../components';

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-3">
      {/* add any other layout components or styles here */}
      <Navbar />
      {children}
    </div>
  );
};
