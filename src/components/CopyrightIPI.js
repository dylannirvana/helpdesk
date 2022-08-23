import { Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

function CopyrightIPI() {
  return (
      <div id='copyrightipi' className='section' >
      
        <div id='carousel1' class='testCarousel'>
          <Carousel indicators={true} interval={null} >
              <Carousel.Item id='slide1' >                
                  <h1>Tracking the Writer and Publisher IPI</h1>
                  <p>Occaecat eu occaecat ad voluptate consectetur ipsum aliquip quis labore ex ullamco. Fugiat id est exercitation labore laboris. Proident ullamco laborum ut cillum. Commodo mollit nisi pariatur occaecat et ad magna ea enim elit velit fugiat. </p>
                  <Button variant="secondary" href='https://applications.bmi.com/Security/' >My IPI number</Button>{' '}      
              </Carousel.Item>

              <Carousel.Item id='slide2' >              
                  <h1>Who uses the IPI number?</h1>
                  <p>Occaecat eu occaecat ad voluptate consectetur ipsum aliquip quis labore ex ullamco. Fugiat id est exercitation labore laboris. Proident ullamco laborum ut cillum. Commodo mollit nisi pariatur occaecat et ad magna ea enim elit velit fugiat. </p>
                  {/* <Button variant="secondary" href='#top' >This is not my beautiful wife</Button>{' '}       */}
              </Carousel.Item>

              <Carousel.Item id='slide3' >
                  <h1>Where is my IPI number?</h1>
                  <p>Aliquip velit anim occaecat culpa aliquip qui. Do dolor adipisicing mollit ea excepteur deserunt irure consectetur occaecat est. Ad nisi ullamco commodo laborum. Occaecat officia ut veniam commodo do minim proident mollit nisi ad exercitation minim.</p>
      
                  {/* <Button variant="secondary" className='mybutton' href='https://applications.bmi.com/Security/'>My IPI number</Button>{' '} */}

                  <div className=''>
                    {/* <Button variant="outline-secondary" className='mybutton' href='#home' >More questions?</Button>{' '} */}

                    <Button variant="outline-secondary" className='mybutton' href='#copyrightroyalty'>What are royalties?</Button>{' '}
                  </div>
              </Carousel.Item>

          </Carousel>
      </div>
    </div>
  );
}

export default CopyrightIPI;
