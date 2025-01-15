import { Component } from 'react';
import { Col, Alert, Spinner } from 'react-bootstrap';

const URL = 'http://www.omdbapi.com/?apikey=a5544ab3&s=';

class CardRow extends Component {
  state = {
    search: [],
    isLoading: true,
    isError: false,
  };

  getFilms = async () => {
    const searchKey = this.props.searchKey;

    try {
      const response = await fetch(URL + searchKey);
      if (!response.ok) {
        throw new Error('Impossibile recuperare i dati dalla API');
      }
      const data = await response.json();
      const firstSix = data.Search.slice(0, 6);

      this.setState({
        search: firstSix,
        isLoading: false,
      });
    } catch (error) {
      console.log('ERROR', error);
      this.setState({
        isLoading: false,
        isError: true,
      });
    }
  };

  componentDidMount() {
    this.getFilms();
  }

  render() {
    return (
      <>
        {this.state.search.map((film, i) => {
          return (
            <Col key={i} className=' carouselImg'>
              <img
                src={film.Poster}
                alt={film.Title}
                style={{ width: '100%', height: '100%' }}
              />
            </Col>
          );
        })}

        {this.state.isLoading && (
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

        {this.state.isError && (
          <div className='text-center'>
            <Alert variant='danger'>Si è verificato un errore</Alert>
          </div>
        )}
      </>
    );
  }
}

export default CardRow;
