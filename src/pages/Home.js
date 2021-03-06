//import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
//import Carol from '../components/Carousel';
import './Home.css';
import Carousel from '../components/Carousel/Carousel';

const HomePage = (props) => {
  return (
    <div>
      <Container className=' home-page d-flex justify-content-center align-items-center flex-column text-center'>
        <h1 className='h1 home-text col text-center'>easl</h1>
        <p className='home-txt'>
          The World's most exclusive e-commerce platform for the Christian
          Artists and Musicians!
        </p>

        {/* <Carol /> */}

        {/* <Link to='/signup' className='button1'>
          Create Account
        </Link>
        <br />
        <Link className='button2' to='/gallery'>
          View Listings
        </Link> */}
        <section>
          <Carousel />
        </section>
      </Container>
    </div>
  );
};

export default HomePage;
