import React from 'react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import Header from '../Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div id='layout-container'>
    <Header />
    <Navigation />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
