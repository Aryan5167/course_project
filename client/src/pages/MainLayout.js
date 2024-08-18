import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import TopBar from '../components/TopBar/TopBar';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Navbar />
      <div className="content-wrapper">
        <TopBar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
