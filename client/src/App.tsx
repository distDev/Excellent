import { AppRouter } from './Components/appRouter/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './Components/layout/Layout';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <AppRouter />
        </Layout>
      </Router>
    </>
  );
}

export default App;
