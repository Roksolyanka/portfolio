import React, { Suspense } from 'react';

import Navigation from '../Navigation';
import Footer from '../Footer';
import Header from '../Header';
import Loader from '../Loader';

import { Main } from './styled';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <Navigation />
    <Suspense fallback={<Loader />}>
      <Main>{children}</Main>
    </Suspense>
    <Footer />
  </>
);

export default Layout;
