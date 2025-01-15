import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const URL = 'http://www.omdbapi.com/?apikey=a5544ab3&i=';

const striveURL = 'https://striveschool-api.herokuapp.com/api/comments/';
const token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzg2NTk4MzBmZTRlMjAwMTU2Njg3YjgiLCJpYXQiOjE3MzY4NTc5ODgsImV4cCI6MTczODA2NzU4OH0.MGf5QS76_6IP8ViWJmoEUTEWv9nAx1kN1gmvOseZ5uk';

const MovieDetails = () => {
  const [movieDeet, setMovieDeets] = useState(null);
  const [movieComments, setMovieComments] = useState(null);
  const params = useParams();

  const getMovie = async () => {
    try {
      const response = await fetch(URL + params.movieId);
      if (!response.ok) {
        throw new Error('Impossibile recuperare i dati dalla API');
      }
      const data = await response.json();
      setMovieDeets(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getComments = async () => {
    try {
      const response = await fetch(striveURL + params.movieId, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      });
      if (!response.ok) {
        throw new Error('Impossibile recuperare i dati dalla API');
      }
      const data = await response.json();
      console.log(data);
      setMovieComments(data);

      setMovieComments(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie();
    getComments();
    console.log('USE EFFECT');
  }, []);

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col xs={12} md={6}>
          <Card className='my-4 mx-auto'>
            {movieDeet ? (
              <>
                <Card.Img
                  variant='top'
                  src={movieDeet.Poster}
                  alt={movieDeet.Title}
                />
                <Card.Body>
                  <Card.Title>{movieDeet.Title}</Card.Title>
                  <Card.Text>
                    <strong>Year:</strong> {movieDeet.Year}
                    <br />
                    <strong>Genre:</strong> {movieDeet.Genre}
                    <br />
                    <strong>Plot:</strong> {movieDeet.Plot}
                  </Card.Text>
                  <Button
                    variant='primary'
                    href={movieDeet.Website}
                    target='_blank'
                  >
                    More Info
                  </Button>
                </Card.Body>
              </>
            ) : (
              <Card.Body>
                <Card.Text>Loading movie details...</Card.Text>
              </Card.Body>
            )}
          </Card>
        </Col>
        <Col xs={12} md={6} className='text-white'>
          <h2 className=' text-center'>Comments</h2>
          {movieComments && movieComments.length > 0 ? (
            movieComments.map((comment) => (
              <div key={comment._id}>
                <h6 className='text-center'>{comment.author}</h6>
                <p>
                  <strong>Commento: </strong>
                  {comment.comment}
                </p>
                <p>
                  <strong>Voto:</strong> {comment.rate}
                </p>
              </div>
            ))
          ) : (
            <p className='text-center'>Nessun commento dagli utenti</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
