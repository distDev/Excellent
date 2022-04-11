import { AppRouter } from './Components/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './Components/Layout/Layout';

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
