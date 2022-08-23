import { Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

function YouArtist() {
  return (
    <div id='youartist' className='section' >

      <div id='carousel2' class='testCarousel'>
        <Carousel indicators={true} interval={null} >
          <Carousel.Item id='slide1' >
            <h1>I am an artist too</h1>
            <p>Occaecat eu occaecat ad voluptate consectetur ipsum aliquip quis labore ex ullamco. Fugiat id est exercitation labore laboris. Proident ullamco laborum ut cillum. Commodo mollit nisi pariatur occaecat et ad magna ea enim elit velit fugiat. Dolore excepteur aliquip veniam aute et deserunt magna Lorem cillum id. Qui laborum in ad amet.</p>

            <h2>BMI is here to educate and empower you</h2>
            <p>Occaecat eu occaecat ad voluptate consectetur ipsum aliquip quis labore ex ullamco. Fugiat id est exercitation labore laboris. </p>

            <Button variant="outline-secondary" href='#youlive' >BMI Live</Button>{' '}

          </Carousel.Item>

          <Carousel.Item id='slide2' >
            <h1>Royalties</h1>
            <p>Incididunt elit laborum enim velit laborum nostrud id fugiat qui. Veniam pariatur enim non reprehenderit nisi laborum laboris amet dolore commodo adipisicing dolore est exercitation. Ipsum in qui incididunt exercitation eu sunt excepteur. Commodo ad nulla proident eu et.</p>

          </Carousel.Item>

          <Carousel.Item id='slide33' >
            <h1>Who handles what</h1>
            <p>Aliquip velit anim occaecat culpa aliquip qui. Do dolor adipisicing mollit ea excepteur deserunt irure consectetur occaecat est. Ad nisi ullamco commodo laborum. Occaecat officia ut veniam commodo do minim proident mollit nisi ad exercitation minim.</p>

            <Button variant="secondary" href='https://www.bmi.com/' >Join BMI</Button>{' '}

          </Carousel.Item>

        </Carousel>

      </div>

    </div>
  );
}

export default YouArtist;
