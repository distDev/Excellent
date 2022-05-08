import { AppRouter } from './Components/appRouter/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './Components/layout';
import { ThemeProvider } from 'styled-components';
import { light } from './Theme/light';

function App() {
  return (
    <>
      <Router>
        <ThemeProvider theme={light}>
          <Layout>
            <AppRouter />
          </Layout>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
