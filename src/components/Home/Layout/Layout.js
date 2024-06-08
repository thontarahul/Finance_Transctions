// Layout.js
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navbar from '../Sidebar/Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
