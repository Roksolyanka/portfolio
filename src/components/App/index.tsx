import RoutesList from '../RoutesList';
import Layout from '../Layout';

import { GlobalStyle } from '../../ui/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <RoutesList />
      </Layout>
    </>
  );
};

export default App;
