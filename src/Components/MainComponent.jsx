import { Carousel, Container, Dropdown, Row } from 'react-bootstrap';
import CardRow from './CardRow';

const MainComponent = (props) => {
  return (
    <Container fluid className=' px-4 text-white'>
      <div className='d-flex justify-content-between'>
        <div className='d-flex'>
          <h2 className='mb-4 fs-1 fw-bolder'>
            {props.location === '/tv-shows' ? 'TvShows' : 'Home'}
          </h2>
          <Dropdown>
            <Dropdown.Toggle
              variant='dark'
              id='dropdown-basic'
              className='ms-4 bg-black border-white rounded-0 mt-2'
            >
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu className='bg-dark'>
              <Dropdown.Item href='#' className='text-white'>
                Comedy
              </Dropdown.Item>
              <Dropdown.Item href='#' className='text-white'>
                drama
              </Dropdown.Item>
              <Dropdown.Item href='#' className='text-white'>
                Thriller
              </Dropdown.Item>
              <Dropdown.Item href='#' className='text-white'>
                Horror
              </Dropdown.Item>
              <Dropdown.Item href='#' className='text-white'>
                Love
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div>
          <i className='bi bi-grid icons mx-3 fs-4'></i>
          <i className='bi bi-grid-3x3 icons fs-4'></i>
        </div>
      </div>
      <h2>Trending Now</h2>
      <Carousel className='px-5'>
        <Carousel.Item>
          <Row xs={1} sm={2} md={3} lg={6}>
            <CardRow searchKey='Harry Potter' />
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row xs={1} sm={2} md={3} lg={6}>
            <CardRow searchKey='Lord of the Rings' />
          </Row>
        </Carousel.Item>
      </Carousel>
      <h2>Watch it Again</h2>
      <Carousel className='px-5'>
        <Carousel.Item>
          <Row xs={1} sm={2} md={3} lg={6}>
            <CardRow searchKey='Hitman' />
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row xs={1} sm={2} md={3} lg={6}>
            <CardRow searchKey='Mission Impossible' />
          </Row>
        </Carousel.Item>
      </Carousel>
      <h2>New Releases</h2>
      <Carousel className='px-5'>
        <Carousel.Item>
          <Row xs={1} sm={2} md={3} lg={6}>
            <CardRow searchKey='Fast&Furious' />
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row xs={1} sm={2} md={3} lg={6}>
            <CardRow searchKey='Indiana Jones' />
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default MainComponent;
