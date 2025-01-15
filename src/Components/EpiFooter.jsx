import { Row, Col, Button } from 'react-bootstrap';

const EpiFooter = () => {
  return (
    <footer>
      <Row xs={2} className='justify-content-center mt-5'>
        <Col>
          <Row>
            <Col className='mb-2 text-secondary'>
              <i className='bi bi-facebook footer-icon me-2'></i>
              <i className='bi bi-instagram footer-icon me-2'></i>
              <i className='bi bi-twitter-x footer-icon me-2'></i>
              <i className='bi bi-youtube footer-icon'></i>
            </Col>
          </Row>
          <Row xs={1} sm={2} md={4}>
            <Col>
              <Row>
                <Col>
                  <p>
                    <a href='#' alt='footer link'>
                      Audio and Subtitles
                    </a>
                  </p>
                  <p>
                    <a href='#' alt='footer link'>
                      Media Center
                    </a>
                  </p>
                  <p>
                    <a href='#' alt='footer link'>
                      Privacy
                    </a>
                  </p>
                  <p>
                    <a href='#' alt='footer link'>
                      Contact us
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col>
                  <p>
                    <a href='#' alt='footer link'>
                      Audio Description
                    </a>
                  </p>
                  <p>
                    <a href='#' alt='footer link'>
                      Investor Relations
                    </a>
                  </p>
                  <p>
                    <a href='#' alt='footer link'>
                      Legal Notices
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className='footer-links'>
                  <p>
                    <a href='#' alt='footer link'>
                      Help Center
                    </a>
                  </p>
                  <p>
                    <a href='#' alt='footer link'>
                      Jobs
                    </a>
                  </p>
                  <p>
                    <a href='#' alt='footer link'>
                      Cookie Preferences
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col>
                  <p>
                    <a href='#' alt='footer link'>
                      Gift Cards
                    </a>
                  </p>
                  <p>
                    <a href='#' alt='footer link'>
                      Terms of Use
                    </a>
                  </p>
                  <p>
                    <a href='#' alt='footer link'>
                      Corporate Information
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className='mb-2'>
              <Button variant='secondary' className=' rounded-0 mt-3'>
                Service Code
              </Button>
            </Col>
          </Row>
          <Row className=' text-secondary'>
            <Col className=' mb-2 mt-2 copyright'>
              © 1997-2023 Netflix, Inc.
            </Col>
          </Row>
        </Col>
      </Row>
    </footer>
  );
};

export default EpiFooter;
