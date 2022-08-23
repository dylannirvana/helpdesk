import { Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

function CopyrightRoyalty() {
  return (
      <div id='copyrightroyalty' className='section' >

        <div id='carousel1' class='testCarousel'>
        <Carousel indicators={true} interval={null} >
            <Carousel.Item id='slide1' >                
                <h1>5 types of royalties</h1>
                <p>Occaecat eu occaecat ad voluptate consectetur ipsum aliquip quis labore ex ullamco. Fugiat id est exercitation labore laboris. Proident ullamco laborum ut cillum. Commodo mollit nisi pariatur occaecat et ad magna ea enim elit velit fugiat. </p>
                
                <h2>Who handles what?</h2>
                <p>Occaecat eu occaecat ad voluptate consectetur ipsum aliquip quis labore ex ullamco. Fugiat id est exercitation labore laboris.  </p>

                {/* <Button variant="secondary" href='https://applications.bmi.com/Security/' >Register with BMI</Button>{' '}       */}
            </Carousel.Item>

            <Carousel.Item id='slide2' >              
                <h1>Performance Royalty</h1>
                <p>Occaecat eu occaecat ad voluptate consectetur ipsum aliquip quis labore ex ullamco. Fugiat id est exercitation labore laboris. Proident ullamco laborum ut cillum. Commodo mollit nisi pariatur occaecat et ad magna ea enim elit velit fugiat. </p>
                {/* <Button variant="secondary" href='#top' >This is not my beautiful wife</Button>{' '}       */}
            </Carousel.Item>

            <Carousel.Item id='slide3' >
                <h1>Tracking your songs with the ISWC</h1>
                <p>Incididunt elit laborum enim velit laborum nostrud id fugiat qui. Veniam pariatur enim non reprehenderit nisi laborum laboris amet dolore commodo adipisicing dolore est exercitation. Ipsum in qui incididunt exercitation eu sunt excepteur. Commodo ad nulla proident eu et.</p>
                {/* <Button variant="secondary" href='#top' >My catalog</Button>{' '}       */}
            </Carousel.Item>

            <Carousel.Item id='slide4' >
                <h1>Paying on the IPI</h1>
                <p>Aliquip velit anim occaecat culpa aliquip qui. Do dolor adipisicing mollit ea excepteur deserunt irure consectetur occaecat est. Ad nisi ullamco commodo laborum. Occaecat officia ut veniam commodo do minim proident mollit nisi ad exercitation minim.</p>
     
                {/* <Button variant="secondary" className='mybutton' href='https://applications.bmi.com/Security/' >My catalog / Join</Button>{' '} */}

                <div className=''>
                  {/* <Button variant="outline-secondary" className='mybutton' href='#home' >More questions?</Button>{' '} */}

                  <Button variant="outline-secondary" className='mybutton' href='#copyrightadvance' >Can I get an advance?</Button>{' '}
                </div>
            </Carousel.Item>

        </Carousel>
     </div>   

      </div>
  );
}

export default CopyrightRoyalty;
