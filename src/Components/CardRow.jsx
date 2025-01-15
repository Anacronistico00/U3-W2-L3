import { useEffect, useState } from 'react';
import { Col, Alert, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const URL = 'http://www.omdbapi.com/?apikey=a5544ab3&s=';

const CardRow = (props) => {
  const [search, setSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const getFilms = async () => {
    const searchKey = props.searchKey;

    try {
      const response = await fetch(URL + searchKey);
      if (!response.ok) {
        throw new Error('Impossibile recuperare i dati dalla API');
      }
      const data = await response.json();
      const firstSix = data.Search.slice(0, 6);
      console.log(firstSix);

      setSearch(firstSix);
      setIsLoading(false);
    } catch (error) {
      console.log('ERROR', error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <>
      {search.map((film, i) => {
        return (
          <Col key={i} className=' carouselImg'>
            <img
              src={film.Poster}
              alt={film.Title}
              style={{ width: '100%', height: '100%' }}
              onClick={() => {
                navigate('/movie-details/' + film.imdbID);
              }}
            />
          </Col>
        );
      })}

      {isLoading && (
        <div className='text-center'>
          <div>
            <p>Caricamento in corso...</p>

            <Spinner
              animation='grow'
              size='sm'
              variant='info'
              className='ms-2'
            />
            <Spinner
              animation='grow'
              size='sm'
              variant='info'
              className='ms-2'
            />
            <Spinner
              animation='grow'
              size='sm'
              variant='info'
              className='ms-2'
            />
          </div>
        </div>
      )}

      {isError && (
        <div className='text-center'>
          <Alert variant='danger'>Si è verificato un errore</Alert>
        </div>
      )}
    </>
  );
};

export default CardRow;
