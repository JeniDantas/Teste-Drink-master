import Carousel from 'react-bootstrap/Carousel';
import './Carrousel.css'

function Carrousel(props) {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <div className='container-carousel'>
        <div className='img'>
      <img
          className="d-block w-100"
          src="https://i.imgur.com/P0eyyaP.png"
          alt=" slide" 
        />
      </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='container-carousel'>
      <div className='img'>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/mRjNQur.png"
          alt=" slide"
        />
        </div>
      </div>
       
      </Carousel.Item>
      <Carousel.Item>
      <div className='container-carousel'>
      <div className='img'>
      <img
          className="d-block w-100"
          src="https://i.imgur.com/Pp7bqQT.png"
          alt="slide"
        />
        </div>
      </div>
        
      </Carousel.Item>
      <Carousel.Item>
      <div className='container-carousel'>
      <div className='img'>
      <img
          className="d-block w-100"
          src="https://i.imgur.com/JmopVAU.png"
          alt="slide"
        />
        </div>
      </div>
        
      </Carousel.Item>
      <Carousel.Item>
      <div className='container-carousel'>
      <div className='img'>
      <img
          className="d-block w-100"
          src="https://i.imgur.com/eY303ul.png"
          alt="slide"
        />
        </div>
      </div>
       
      </Carousel.Item>
      <Carousel.Item>
      <div className='container-carousel'>
      <div className='img'>
      <img
          className="d-block w-100"
          src="https://i.imgur.com/mCY3Xrr.png"
          alt="slide"
        />
        </div>
      </div>
       
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;