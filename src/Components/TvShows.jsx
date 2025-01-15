import { useLocation } from 'react-router-dom';
import MainComponent from './MainComponent';

const TvShows = () => {
  const location = useLocation();
  console.log(location);

  return <MainComponent location={location.pathname} />;
};

export default TvShows;
