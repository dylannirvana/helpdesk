import { Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import '../App.scss';


function Carousel1() {
  return (
    <div id='carousel1' class='testCarousel'>
        <Carousel indicators={true} interval={null} >
            <Carousel.Item id='slide1' >
                
                <h1>Under the water</h1>
                <p>Occaecat eu occaecat ad voluptate consectetur ipsum aliquip quis labore ex ullamco. Fugiat id est exercitation labore laboris. Proident ullamco laborum ut cillum. Commodo mollit nisi pariatur occaecat et ad magna ea enim elit velit fugiat. Dolore excepteur aliquip veniam aute et deserunt magna Lorem cillum id. Qui laborum in ad amet..</p>
                {/* <Button variant="secondary" href='#top' >This is not my beautiful wife</Button>{' '}       */}

            </Carousel.Item>
            <Carousel.Item id='slide2' >
              
                <h1>Carry the water</h1>
                <p>Incididunt elit laborum enim velit laborum nostrud id fugiat qui. Veniam pariatur enim non reprehenderit nisi laborum laboris amet dolore commodo adipisicing dolore est exercitation. Ipsum in qui incididunt exercitation eu sunt excepteur. Commodo ad nulla proident eu et.</p>
                {/* <Button variant="secondary" href='#top' >This is not my beautiful wife</Button>{' '}       */}
            
            </Carousel.Item>
            <Carousel.Item id='slide3' >
                
                <h1>Remove the water at the bottom of the ocean</h1>
                <p>Aliquip velit anim occaecat culpa aliquip qui. Do dolor adipisicing mollit ea excepteur deserunt irure consectetur occaecat est. Ad nisi ullamco commodo laborum. Occaecat officia ut veniam commodo do minim proident mollit nisi ad exercitation minim.</p>
                <Button variant="secondary" href='#home' >This is not my beautiful wife</Button>{' '}      

            </Carousel.Item>
        </Carousel>
     </div>
        
    )
}

export default Carousel1;
