import React from 'react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import Header from '../Header';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div id='layout-container'>
    <Header></Header>
    <Navigation />
    <main>{children}</main>
    <Footer></Footer>
  </div>
);

export default Layout;
