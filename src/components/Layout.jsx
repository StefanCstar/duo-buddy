import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;