import HomePage from '../pages/Homepage/HomePage';
import AuthPage from '../pages/AuthPage/AuthPage';
import {Route,Routes} from "react-router-dom";
function App() {

  return(
    <>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/auth' element={<AuthPage />} />
      </Routes>
  </>
  );
 }

export default App
