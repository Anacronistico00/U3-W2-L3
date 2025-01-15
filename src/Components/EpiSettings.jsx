import { Button, Col, Container, Row } from 'react-bootstrap';

const epiSettings = () => {
  return (
    <Container className='m-auto w-75 text-secondary'>
      <h1>Account</h1>
      <hr />
      <Container>
        <Row>
          <Col xs={12} md={4} className='mb-2'>
            <p className='fs-5'>MEMBERSHIP & BILLING</p>
            <Button className='btn text-secondary bg-black border-white'>
              Cancel Membership
            </Button>
          </Col>
          <Col xs={12} md={8}>
            <div className='d-flex justify-content-between'>
              <p className='fw-bold text-white'>Jonathan@fontaine.com</p>
              <a href='#' className='text-end'>
                Change account email
              </a>
            </div>
            <div className='d-flex justify-content-between'>
              <p className=''>Password: *******</p>
              <a href='#'>Change password</a>
            </div>
            <div className='d-flex justify-content-between'>
              <p className=''>Phone: *******495</p>
              <a href='#'>Change phone number</a>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col md={4}></Col>
          <Col xs={12} md={8}>
            <hr />
            <Row>
              <Col lg={3}>
                <img
                  src='/public/paypal.webp'
                  alt='Paypal Logo'
                  className='w-75'
                />
              </Col>
              <Col xs={12} lg={9}>
                <div className='d-flex justify-content-between'>
                  <p className='fw-bold text-white m-0'>
                    Jonathan@fontaine.com
                  </p>

                  <a href='#' className='text-end'>
                    Update payment info
                  </a>
                </div>
                <div className='d-flex justify-content-end'>
                  <a href='#'>Billing Details</a>
                </div>
                <div className='d-flex justify-content-end'>
                  <a href='#' className='py-3'>
                    Redeem gift card or promo code
                  </a>
                </div>
                <div className='d-flex justify-content-end py-1'>
                  <a href='#'>Where to buy gift cards?</a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <hr />

      <Container>
        <Row>
          <Col md={4}>
            <p className='fs-5'>PLAN DETAILS</p>
          </Col>

          <div className='d-flex justify-content-between col-md-8'>
            <p className='fw-bold text-white'>
              Standard <i className='bi bi-badge-hd'></i>
            </p>
            <a href='#' className='text-end'>
              Change plan
            </a>
          </div>
        </Row>
      </Container>
      <hr />
      <Container>
        <Row>
          <Col md={4}>
            <p className='fs-5'>SETTINGS</p>
          </Col>
          <Col md={4} className='d-flex flex-column'>
            <a href='#'>Parental Controls</a>
            <a href='#'>Test participation</a>
            <a href='#'>Manage download devices</a>
          </Col>
          <Col md={4} className='d-flex flex-column'>
            <a href='#'>Activate a device</a>
            <a href='#'>Recent device streaming activity</a>
            <a href='#'>signout all devices</a>
          </Col>
        </Row>
      </Container>

      <hr />
      <Container>
        <Row>
          <Col md={4}>
            <p className='fs-5'>MY PROFILE</p>
          </Col>
          <Col md={4} className='d-flex'>
            <Col className='d-flex align-items-center'>
              <img
                src='/public/avatar.png'
                alt='Profile Image'
                className='w-25'
              />
              <p className='fw-bold ms-4 text-white'>Jonathan Fontaine</p>
            </Col>
          </Col>
          <Col md={4}>
            <Col className='d-flex flex-column'>
              <a href='#'>Manage Profile</a>
              <a href='#'>Add profile email</a>
            </Col>
          </Col>
        </Row>

        <Row className='my-5'>
          <Col md={4}></Col>
          <Col md={4}>
            <div className='d-flex flex-column'>
              <a href='#' className='py-2'>
                Language
              </a>
              <a href='#'>Playback settings</a>
              <a href='#' className='py-2'>
                Subtitle Appearance
              </a>
            </div>
          </Col>
          <Col md={4}>
            <div className='d-flex flex-column'>
              <a href='#' className='py-2'>
                Viewing activity
              </a>
              <a href='#'>Ratings</a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default epiSettings;
