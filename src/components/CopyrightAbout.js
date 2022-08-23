import { Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

function CopyrightAbout() {
  return (
    <div id='copyrightabout' className='section'>

      <div id='carousel2' class='testCarousel'>
        <Carousel indicators={true} interval={null} >
          <Carousel.Item id='slide1' >       
            <h1>It's all about copyright</h1>
            <p>Occaecat eu occaecat ad voluptate consectetur ipsum aliquip quis labore ex ullamco. Fugiat id est exercitation labore laboris. Proident ullamco laborum ut cillum. Commodo mollit nisi pariatur occaecat et ad magna ea enim elit velit fugiat. Dolore excepteur aliquip veniam aute et deserunt magna Lorem cillum id. Qui laborum in ad amet..</p>
            {/* <Button variant="secondary" href='#top' >This is not my beautiful wife</Button>{' '}       */}
          </Carousel.Item>

          <Carousel.Item id='slide2' >
            <h1>Song divides in two: Composition and Masters</h1>
            <p>Incididunt elit laborum enim velit laborum nostrud id fugiat qui. Veniam pariatur enim non reprehenderit nisi laborum laboris amet dolore commodo adipisicing dolore est exercitation. Ipsum in qui incididunt exercitation eu sunt excepteur. Commodo ad nulla proident eu et.</p>
          
          </Carousel.Item>

          <Carousel.Item id='slide3' >                
            <h1>Tracking the Composition ISWC</h1>
            <p>Aliquip velit anim occaecat culpa aliquip qui. Do dolor adipisicing mollit ea excepteur deserunt irure consectetur occaecat est. Ad nisi ullamco commodo laborum. Occaecat officia ut veniam commodo do minim proident mollit nisi ad exercitation minim.</p>
            <Button variant="secondary" href='#top' >My catalog</Button>{' '}      
          </Carousel.Item>
          
          <Carousel.Item id='slide4' >                
            <h1>Tracking the Masters ISRC</h1>
            <p>Aliquip velit anim occaecat culpa aliquip qui. Do dolor adipisicing mollit ea excepteur deserunt irure consectetur occaecat est. Ad nisi ullamco commodo laborum. Occaecat officia ut veniam commodo do minim proident mollit nisi ad exercitation minim.</p>

            <Button variant="outline-secondary" className='mybutton' href='#copyrightipi' >Composition divides in two</Button>{' '}      
          </Carousel.Item>
      </Carousel>

     </div>

    </div>
  );
}

export default CopyrightAbout;
