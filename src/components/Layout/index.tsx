import React from 'react';
import Navigation from '../Navigation';
import Footer from '../Footer';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div id='layout-container'>
    <header></header>
    <Navigation />
    <main>{children}</main>
    <Footer></Footer>
  </div>
);

export default Layout;
