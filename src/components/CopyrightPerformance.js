import { Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';


function CopyrightPerformance() {
  return (
      <div id='copyrightperformance' className='section' >

        <div id='carousel1' class='testCarousel'>
        <Carousel indicators={true} interval={null} >
            <Carousel.Item id='slide1' >                
                <h1>What are performance royalties?</h1>
                <p>Occaecat eu occaecat ad voluptate consectetur ipsum aliquip quis labore ex ullamco. Fugiat id est exercitation labore laboris. Proident ullamco laborum ut cillum. Commodo mollit nisi pariatur occaecat et ad magna ea enim elit velit fugiat. </p>

                <Button variant="outline-secondary" className='mybutton' href='#copyrightpaid' >Why haven't I gotten paid?</Button>{' '} 
                 
            </Carousel.Item>

            <Carousel.Item id='slide2' >              
                <h1>Copyright</h1>
                <p>Occaecat eu occaecat ad voluptate consectetur ipsum aliquip quis labore ex ullamco. Fugiat id est exercitation labore laboris. Proident ullamco laborum ut cillum. Commodo mollit nisi pariatur occaecat et ad magna ea enim elit velit fugiat. </p>
               
            </Carousel.Item>

            <Carousel.Item id='slide3' >
                <h1>Royalties</h1>
                <p>Incididunt elit laborum enim velit laborum nostrud id fugiat qui. Veniam pariatur enim non reprehenderit nisi laborum laboris amet dolore commodo adipisicing dolore est exercitation. Ipsum in qui incididunt exercitation eu sunt excepteur. Commodo ad nulla proident eu et.</p>

            </Carousel.Item>

            <Carousel.Item id='slide4' >
                <h1>Licenses and tracking</h1>
                <p>Aliquip velit anim occaecat culpa aliquip qui. Do dolor adipisicing mollit ea excepteur deserunt irure consectetur occaecat est. Ad nisi ullamco commodo laborum. Occaecat officia ut veniam commodo do minim proident mollit nisi ad exercitation minim.</p>
     
                {/* <Button variant="secondary" className='mybutton' href='https://applications.bmi.com/Security/' >My catalog / Join</Button>{' '} */}

                <div className=''>
                  <Button variant="secondary" className='mybutton' href='https://applications.bmi.com/Security/' >Join BMI as a Creator</Button>{' '}

                  <Button variant="secondary" className='mybutton' href='https://applications.bmi.com/Security/' >Join BMI as a Licensor</Button>{' '}
                </div>   
            </Carousel.Item>

        </Carousel>
     </div>



      </div>
  );
}

export default CopyrightPerformance;
