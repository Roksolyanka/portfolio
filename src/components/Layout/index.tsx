import React, { FC, Suspense } from 'react';

import Navigation from '../Navigation';
import Footer from '../Footer';
import Header from '../Header';
import Loader from '../Loader';
import { LayoutProps } from '../../interfaces';

import { Main } from './styled';
import { FlexBox } from '../../ui';

const Layout: FC<LayoutProps> = ({ children }) => (
  <FlexBox flexDirection='column' minHeight='100vh'>
    <Header />
    <Navigation />
    <Suspense fallback={<Loader />}>
      <Main>{children}</Main>
    </Suspense>
    <Footer />
  </FlexBox>
);

export default Layout;
