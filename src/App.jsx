import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import EpiNavbar from './Components/EpiNavbar';
import MainComponent from './Components/MainComponent';
import EpiProfile from './Components/EpiProfile';
import EpiFooter from './Components/EpiFooter';
import EpiSettings from './Components/EpiSettings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <EpiNavbar />
        <Routes>
          <Route path='/' element={<MainComponent />} />
          <Route path='/profile' element={<EpiProfile />} />
          <Route path='/settings' element={<EpiSettings />} />
        </Routes>
        <EpiFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
