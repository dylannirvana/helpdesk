import { Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import '../App.scss';


function Carousel1() {
  return (
    <div id='carousel1' class='carousel1'>
        <Carousel indicators={false} interval={null} >
            <Carousel.Item id='slide1' >
                
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <Button variant="secondary" href='#top' >This is not my beautiful wife</Button>{' '}      

            </Carousel.Item>
            <Carousel.Item id='slide2' >
              
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Button variant="secondary" href='#top' >This is not my beautiful wife</Button>{' '}      
            
            </Carousel.Item>
            <Carousel.Item id='slide3' >
                
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                <Button variant="secondary" href='#top' >This is not my beautiful wife</Button>{' '}      

            </Carousel.Item>
        </Carousel>
     </div>
        
    )
}

export default Carousel1;
