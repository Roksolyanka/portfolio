import React from 'react';
import Navigation from '../Navigation';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div id='layout-container'>
    <header></header>
    <Navigation />
    <main>{children}</main>
    <footer></footer>
  </div>
);

export default Layout;
