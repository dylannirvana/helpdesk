import { Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

function LicensePays() {
  return (
    <div id='licensepays' className='section' >

      <div id='carousel1' class='testCarousel'>
        <Carousel indicators={true} interval={null} >
          <Carousel.Item id='slide1' >
            <h1>Who pays BMI?</h1>
            <p>Occaecat eu occaecat ad voluptate consectetur ipsum aliquip quis labore ex ullamco. Fugiat id est exercitation labore laboris. Proident ullamco laborum ut cillum. Commodo mollit nisi pariatur occaecat et ad magna ea enim elit velit fugiat. </p>

            <Button variant="outline-secondary" className='mybutton' href='#licenseisrc' >The ISRC</Button>{' '}

          </Carousel.Item>

          <Carousel.Item id='slide2' >
            <h1>Collection of Performance Royalties</h1>
            <p>Occaecat eu occaecat ad voluptate consectetur ipsum aliquip quis labore ex ullamco. Fugiat id est exercitation labore laboris. Proident ullamco laborum ut cillum. Commodo mollit nisi pariatur occaecat et ad magna ea enim elit velit fugiat. </p>

          </Carousel.Item>

          <Carousel.Item id='slide3' >
            <h1>Licensors (But not sync!)</h1>
            <p>Incididunt elit laborum enim velit laborum nostrud id fugiat qui. Veniam pariatur enim non reprehenderit nisi laborum laboris amet dolore commodo adipisicing dolore est exercitation. Ipsum in qui incididunt exercitation eu sunt excepteur. Commodo ad nulla proident eu et.</p>
           
          </Carousel.Item>

        </Carousel>
      </div>

    </div>
  );
}

export default LicensePays;
