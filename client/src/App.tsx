import { AppRouter } from './Components/appRouter/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAppSelector } from './State/store';
import { ThemeProvider } from 'styled-components';
import { light } from './Theme/light';
import { dark } from './Theme/dark';
import AuthProvider from './Components/authProvider';
import Layout from './Components/layout';
import GlobalStyle from './Theme/globalStyle';

function App() {
  const activeTheme = useAppSelector((state) => state.theme);

  return (
    <AuthProvider>
      <Router>
        <ThemeProvider theme={activeTheme === 'light' ? light : dark}>
          <GlobalStyle />
          <Layout>
            <AppRouter />
          </Layout>
        </ThemeProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
