import { Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

function PublisherMMA() {
  return (
    <div id='publishermma' className='section' >

      <div id='carousel2' class='testCarousel'>
        <Carousel indicators={true} interval={null} >
          <Carousel.Item id='slide1' >
            <h1>The Music Modernization Act</h1>
            <p>Occaecat eu occaecat ad voluptate consectetur ipsum aliquip quis labore ex ullamco. Fugiat id est exercitation labore laboris. Proident ullamco laborum ut cillum. Commodo mollit nisi pariatur occaecat et ad magna ea enim elit velit fugiat. Dolore excepteur aliquip veniam aute et deserunt magna Lorem cillum id. Qui laborum in ad amet.</p>

          </Carousel.Item>
         
          <Carousel.Item id='slide2' >
            <h1>Mechanical Royalties</h1>
            <p>Occaecat eu occaecat ad voluptate consectetur ipsum aliquip quis labore ex ullamco. Fugiat id est exercitation labore laboris. Proident ullamco laborum ut cillum. Commodo mollit nisi pariatur occaecat et ad magna ea enim elit velit fugiat. Dolore excepteur aliquip veniam aute et deserunt magna Lorem cillum id. Qui laborum in ad amet.</p>

          </Carousel.Item>

          <Carousel.Item id='slide3' >
            <h2>Mechanical Licensing Collective</h2>
            <p>Incididunt elit laborum enim velit laborum nostrud id fugiat qui. Veniam pariatur enim non reprehenderit nisi laborum laboris amet dolore commodo adipisicing dolore est exercitation.</p>
            
            <h2>Harry Fox Agency</h2>
            <p>Incididunt elit laborum enim velit laborum nostrud id fugiat qui. Veniam pariatur enim non reprehenderit nisi laborum laboris amet dolore commodo adipisicing dolore est exercitation.</p>

            <div className=''>
              <Button variant="outline-secondary" className='mybutton' href='#publisherneed' >What does a publisher do?</Button>{' '}

              <Button variant="outline-secondary" className='mybutton' href='#publisherforeign' >Neighbouring Rights</Button>{' '}
            </div>

          </Carousel.Item>

        </Carousel>

      </div>

    </div>
  );
}

export default PublisherMMA;
