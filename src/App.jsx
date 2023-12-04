import HomePage from '../pages/Homepage/HomePage';
import AuthPage from '../pages/AuthPage/AuthPage';
import {Route,Routes} from "react-router-dom";
import PageLayout from './Layouts/PageLayout/PageLayout';
function App() {

  return(
    <>
    <PageLayout>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/auth' element={<AuthPage />} />
      </Routes>
      </PageLayout>
  </>
  );
 }

export default App
