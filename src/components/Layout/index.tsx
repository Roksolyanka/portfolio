import React from 'react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import Header from '../Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <Navigation />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
