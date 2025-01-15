import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import EpiNavbar from './Components/EpiNavbar';
import MainComponent from './Components/MainComponent';
import EpiProfile from './Components/EpiProfile';
import EpiFooter from './Components/EpiFooter';
import EpiSettings from './Components/EpiSettings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TvShows from './Components/TvShows';
import NotFound from './Components/NotFound';
import MovieDetails from './Components/MovieDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <EpiNavbar />
        <Routes>
          <Route path='/' element={<MainComponent />} />
          <Route path='/profile' element={<EpiProfile />} />
          <Route path='/settings' element={<EpiSettings />} />
          <Route path='/tv-shows' element={<TvShows />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/movie-details/:movieId' element={<MovieDetails />} />
        </Routes>
        <EpiFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
