import RoutesList from '../RoutesList';
import Layout from '../Layout';
import { useTheme } from '../../hooks/useTheme';

import { darkTheme, lightTheme } from '../../theme';
import { GlobalStyle } from '../../ui/GlobalStyles';
import { ThemeProvider } from 'styled-components';

const App = () => {
  const { isDarkTheme } = useTheme();

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Layout>
        <RoutesList />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
