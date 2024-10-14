import React, { Suspense } from 'react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import Header from '../Header';
import { Main } from './styled';
import Loader from '../Loader';

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
