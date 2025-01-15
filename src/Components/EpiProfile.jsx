import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Row,
} from 'react-bootstrap';

const EpiProfile = () => {
  return (
    <Container className='m-auto text-secondary w-50'>
      <Container>
        <h1 className='text-center mt-5 text-white'>Edit Profile</h1>
        <hr />
      </Container>
      <Container className=' px-3'>
        <Row>
          <Col xs={12} md={6}>
            <img
              src='/public/avatar.png'
              alt='Profile Image'
              className='w-25'
            />
          </Col>
          <Col xs={12} md={6}>
            <input type='text' placeholder='BelloMaNonBallo' className='mt-3' />
            <DropdownButton
              align='end'
              title='Select Language'
              id='dropdown-menu-align-end'
              className='mt-3'
            >
              <Dropdown.Item eventKey='1'>Italian</Dropdown.Item>
              <Dropdown.Item eventKey='2'>English</Dropdown.Item>
              <Dropdown.Item eventKey='3'>Deutsch</Dropdown.Item>
              <Dropdown.Item eventKey='4'>Spanish</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <Container className='px-3'>
          <Row>
            <Col xs={12} md={6}>
              <h4>Maturity Settings:</h4>
            </Col>
            <Col xs={12} md={6}>
              <Button className='btn-secondary text-white fw-bolder rounded-0'>
                ALL MATURITY SETTINGS
              </Button>
              <p className='my-3'>
                Show files for all maturity settings for this profile
              </p>
              <Button className='text-secondary bg-black border-secondary rounded-0 profileButtons'>
                EDIT
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>

      <hr />
      <Container>
        <Row className='px-3'>
          <Col xs={12} md={6}>
            <h4>Autoplay Controls:</h4>
          </Col>
          <Col xs={12} md={6} className='pe-0 py-2'>
            <div className='my-2 d-flex align-items-center'>
              <input type='checkbox' className='checkbox border-0 me-2' />
              <p className='text-white ps-2 m-0'>
                Autoplay Next episode in a series on all devices
              </p>
            </div>
            <div className='my-2 d-flex align-items-center'>
              <input type='checkbox' className='checkbox border-0 me-2' />
              <span className='text-white ps-2'>
                Autoplay Next episode in a series on all devices
              </span>
            </div>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container className='px-5 d-flex justify-content-center flex-wrap'>
        <Button className='btn-light text-black fw-bold mx-3 my-3'>SAVE</Button>
        <Button className='border-secondary bg-dark text-secondary mx-3 my-3 profileButtons'>
          CANCEL
        </Button>
        <Button className='border-danger bg-dark text-danger mx-3 my-3 profileButtons'>
          DELETE PROFILE
        </Button>
      </Container>
    </Container>
  );
};

export default EpiProfile;
