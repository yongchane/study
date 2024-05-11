import React from 'react';
import { Outlet } from 'react-router-dom';
import './PageStyle/Layoutstyle.scss';
const LayoutStudy = () => {
  return (
    <div>
      <header style={{ background: 'lightgray', padding: 16, fontSize: 24 }}>
        React Page
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="footer-content">
          <h3>yongchan page</h3>
          <p>
            Hi my name hyunyongchan. This page is my first react-page. Thank you
            for wathing this page
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LayoutStudy;
