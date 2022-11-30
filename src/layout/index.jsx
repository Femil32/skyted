import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

function Layout() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div>
      <NavBar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
