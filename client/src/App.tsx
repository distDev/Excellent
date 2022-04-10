import { AppRouter } from './Components/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import { Wrapper } from './Components/StyledComponents/Wrapper';

function App() {
  return (
    <>
      <Router>
        <Wrapper>
          <AppRouter />
        </Wrapper>
      </Router>
    </>
  );
}

export default App;
