import React from 'react';
import { Suspense } from 'react';

import RoutesList from '../Routes';
import Loader from '../Loader';

import Layout from '../Layout';

export const App = () => (
  <Layout>
    <Suspense fallback={<Loader />}>
      <RoutesList />
    </Suspense>
  </Layout>
);

export default App;
