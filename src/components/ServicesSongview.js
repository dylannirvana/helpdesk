import { Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

function ServicesSongview() {
  return (
    <div id='servicessongview' className='section' >

      <div id='carousel1' class='testCarousel'>
        <Carousel indicators={true} interval={null} >
          <Carousel.Item id='slide1' >

            <h1>Using this powerful service</h1>

            <p>Occaecat eu occaecat ad voluptate consectetur ipsum aliquip quis labore ex ullamco. Fugiat id est exercitation labore laboris. Proident ullamco laborum ut cillum. Commodo mollit nisi pariatur occaecat et ad magna ea enim elit velit fugiat. </p>

            <Button variant="secondary" href='https://bmi.com' >Songview</Button>{' '}
          </Carousel.Item>

          <Carousel.Item id='slide2' >
            <h1>Tracking the ISWC and the IPI numbers</h1>
            <p>Occaecat eu occaecat ad voluptate consectetur ipsum aliquip quis labore ex ullamco. Fugiat id est exercitation labore laboris. Proident ullamco laborum ut cillum.</p>

            <div className=''>
              {/* <Button variant="outline-secondary" className='mybutton' href='#home' >More questions?</Button>{' '} */}

              <Button variant="outline-secondary" className='mybutton' href='#home' >More questions?</Button>{' '}
            </div>


          </Carousel.Item>

        </Carousel>
      </div>

    </div>
  );
}

export default ServicesSongview;
