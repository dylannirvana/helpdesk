import { Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

function LicenseISRC() {
  return (
    <div id='licenseisrc' className='section' >

        <div id='carousel1' class='testCarousel'>
          <Carousel indicators={true} interval={null} >
            <Carousel.Item id='slide1' >
              <h1>ISRC tracks the Sound Recording.</h1>
              <h2>PRO's do not do this. The Distributor does</h2>
              <p>Occaecat eu occaecat ad voluptate consectetur ipsum aliquip quis labore ex ullamco. Fugiat id est exercitation labore laboris. Proident ullamco laborum ut cillum. Commodo mollit nisi pariatur occaecat et ad magna ea enim elit velit fugiat. </p>

              <h2>Who uses the ISWC?</h2>
              <p>Occaecat eu occaecat ad voluptate consectetur ipsum aliquip quis labore ex ullamco. Fugiat id est exercitation labore laboris.  </p>

              <Button variant="outline-secondary" className='mybutton' href='#licenseunauth' >Unauthorized use</Button>{' '}

              {/* <Button variant="secondary" href='https://applications.bmi.com/Security/' >Register with BMI</Button>{' '}       */}
            </Carousel.Item>

            <Carousel.Item id='slide2' >
              {/* <h1>A song in 2 parts</h1> */}
              <h2>Royalties on the Composition</h2>
              <p>Occaecat eu occaecat ad voluptate consectetur ipsum aliquip quis labore ex ullamco. Fugiat id est exercitation labore laboris. Proident ullamco laborum ut cillum.</p>
              {/* <Button variant="secondary" href='#top' >This is not my beautiful wife</Button>{' '}       */}
              
              <h2>Royalties on the Sound Recording</h2>
              <p>Occaecat eu occaecat ad voluptate consectetur ipsum aliquip quis labore ex ullamco. Fugiat id est exercitation labore laboris. Proident ullamco laborum ut cillum.</p>
              {/* <Button variant="secondary" href='#top' >This is not my beautiful wife</Button>{' '}       */}
            </Carousel.Item>

            <Carousel.Item id='slide3' >
              <h1>Who does what</h1>
              <p>Incididunt elit laborum enim velit laborum nostrud id fugiat qui. Veniam pariatur enim non reprehenderit nisi laborum laboris amet dolore commodo adipisicing dolore est exercitation. Ipsum in qui incididunt exercitation eu sunt excepteur. Commodo ad nulla proident eu et.</p>
            </Carousel.Item>

            <Carousel.Item id='slide4' >
              <h1>Get good. Educate yourself. Get paid.</h1>
              <h2>BMI and you.</h2>
              <p>Aliquip velit anim occaecat culpa aliquip qui. Do dolor adipisicing mollit ea excepteur deserunt irure consectetur occaecat est. Ad nisi ullamco commodo laborum. Occaecat officia ut veniam commodo do minim proident mollit nisi ad exercitation minim.</p>

              {/* <Button variant="secondary" className='mybutton' href='https://www.bmi.com/news/advice' >My catalog / Join</Button>{' '} */}

              <Button variant="secondary" href='#top' >My catalog</Button>{' '}

            
            </Carousel.Item>

          </Carousel>
        </div>

    </div>
  );
}

export default LicenseISRC;
