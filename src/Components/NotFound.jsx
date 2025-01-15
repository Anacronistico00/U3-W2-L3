import { Alert, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Alert className='text-center'>
      <h2>404 - Page Not Found</h2>
      <h4>
        Click{' '}
        <Button
          variant='primary'
          onClick={() => {
            navigate('/');
          }}
        >
          HERE
        </Button>{' '}
        to navigate back to Home
      </h4>
    </Alert>
  );
};

export default NotFound;
