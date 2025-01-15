import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MovieCard = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Card.Img
        variant='top'
        src={props.movieDeet.Poster}
        alt={props.movieDeet.Title}
      />
      <Card.Body>
        <Card.Title>{props.movieDeet.Title}</Card.Title>
        <Card.Text>
          <strong>Year:</strong> {props.movieDeet.Year}
          <br />
          <strong>Genre:</strong> {props.movieDeet.Genre}
          <br />
          <strong>Plot:</strong> {props.movieDeet.Plot}
        </Card.Text>
        <Button
          variant='primary'
          onClick={() => {
            navigate('/');
          }}
        >
          Navigate Home
        </Button>
      </Card.Body>
    </>
  );
};

export default MovieCard;
