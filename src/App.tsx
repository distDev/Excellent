import { AppRouter } from './Components/app-router/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { light } from './Theme/light';
import { dark } from './Theme/dark';
import AuthProvider from './Components/auth-provider';
import Layout from './Components/layout';
import GlobalStyle from './Theme/globalStyle';
import { useAppSelector } from './Hooks/useAppSelector';

function App() {
  const activeTheme = useAppSelector((state) => state.theme.mode);

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
