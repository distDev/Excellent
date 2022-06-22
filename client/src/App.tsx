import { AppRouter } from './Components/appRouter/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './Components/layout';
import { ThemeProvider } from 'styled-components';
import { light } from './Theme/light';
import AuthProvider from './Components/authProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ThemeProvider theme={light}>
          <Layout>
            <AppRouter />
          </Layout>
        </ThemeProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
