import { Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

function PublisherNeed() {
  return (
    <div id='publisherneed' className='section'>

      <div id='carousel2' class='testCarousel'>
        <Carousel indicators={true} interval={null} >
          <Carousel.Item id='slide1' >       
            <h1>Do I need a publisher?</h1>
            <p>Occaecat eu occaecat ad voluptate consectetur ipsum aliquip quis labore ex ullamco. Fugiat id est exercitation labore laboris. Proident ullamco laborum ut cillum. Commodo mollit nisi pariatur occaecat et ad magna ea enim elit velit fugiat. Dolore excepteur aliquip veniam aute et deserunt magna Lorem cillum id. Qui laborum in ad amet.</p>
           
            <h2>What does a publisher do?</h2>
            <p>Occaecat eu occaecat ad voluptate consectetur ipsum aliquip quis labore ex ullamco. Fugiat id est exercitation labore laboris. </p>

            <div>
              <Button variant="secondary" href='https://www.bmi.com/' >Register as a publisher</Button>{' '}      
              <Button variant="outline-secondary" href='#publishermma' >The Music Modernization Act</Button>{' '}      
            </div>
            
          </Carousel.Item>

          <Carousel.Item id='slide2' >
            <h1>What does a publisher look for in a writer?</h1>
            <p>Incididunt elit laborum enim velit laborum nostrud id fugiat qui. Veniam pariatur enim non reprehenderit nisi laborum laboris amet dolore commodo adipisicing dolore est exercitation. Ipsum in qui incididunt exercitation eu sunt excepteur. Commodo ad nulla proident eu et.</p>
            
            <h2>What makes a good partnership?</h2>
            <p>Occaecat eu occaecat ad voluptate consectetur ipsum aliquip quis labore ex ullamco. Fugiat id est exercitation labore laboris.</p>
          </Carousel.Item>

          <Carousel.Item id='slide33' >                
            <h1>Should I self-publish?</h1>
            <p>Aliquip velit anim occaecat culpa aliquip qui. Do dolor adipisicing mollit ea excepteur deserunt irure consectetur occaecat est. Ad nisi ullamco commodo laborum. Occaecat officia ut veniam commodo do minim proident mollit nisi ad exercitation minim.</p>

          </Carousel.Item>

      </Carousel>

     </div>
    
    </div>
  );
}

export default PublisherNeed;
