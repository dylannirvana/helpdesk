import { Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

function YouBetter() {
  return (
    <div id='youbetter' className='section' >

      <div id='carousel2' class='testCarousel'>
        <Carousel indicators={true} interval={null} >
          <Carousel.Item id='slide1' >
            <h1>Become a better songwriter</h1>
            <p>Occaecat eu occaecat ad voluptate consectetur ipsum aliquip quis labore ex ullamco. Fugiat id est exercitation labore laboris. Proident ullamco laborum ut cillum. Commodo mollit nisi pariatur occaecat et ad magna ea enim elit velit fugiat. Dolore excepteur aliquip veniam aute et deserunt magna Lorem cillum id. Qui laborum in ad amet.</p>

            <Button variant="outline-secondary" href='#youstatement' >My statements</Button>{' '}

          </Carousel.Item>

          <Carousel.Item id='slide2' >
            <h1>Events, collaborations</h1>
            <p>Aliquip velit anim occaecat culpa aliquip qui. Do dolor adipisicing mollit ea excepteur deserunt irure consectetur occaecat est. Ad nisi ullamco commodo laborum. Occaecat officia ut veniam commodo do minim proident mollit nisi ad exercitation minim.</p>

            <Button variant="secondary" href='https://www.bmi.com/' >Join BMI</Button>{' '}

          </Carousel.Item>

        </Carousel>

      </div>

    </div>
  );
}

export default YouBetter;
