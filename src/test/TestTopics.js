// import logo from './logo.svg';
import '../App.scss'
import { Accordion, Button } from 'react-bootstrap';


function TestTopics() {
  return (
    <div className='mycontainer' >
        <h1>Have any questions?</h1>
            {/* ORIENTATION */}
            <Accordion className='myaccordion' >
              <Accordion.Item className='' eventKey='0'>
                <Accordion.Header>You may find yourself living in a shotgun shack</Accordion.Header>
                <Accordion.Body>
                <Button variant="secondary" className="d-grid gap-2 mybutton orientation" size="lg" href='#question1' >Behind the wheel of a large automobile</Button>{' '}      
                <Button variant="secondary" className="d-grid gap-2 mybutton orientation" size="lg" href='#question2' >With a beautiful house</Button>{' '}      
                <Button variant="secondary" className="d-grid gap-2 mybutton orientation" size="lg" href='#question3' >With a beautiful wife</Button>{' '}      
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion className='myaccordion' >
              <Accordion.Item className='' eventKey='0'>
                <Accordion.Header>Letting the days go by</Accordion.Header>
                <Accordion.Body>
                  {/* REGISTRATION AND CATALOG */}
                  <Button variant="secondary" className="d-grid gap-2 mybutton registration" size="lg" href='#carousel1' >How do I work this?</Button>{' '}      
                  <Button variant="secondary" className="d-grid gap-2 mybutton registration" size="lg" href='#question4' >This is not my beautiful house!</Button>{' '}      
                  <Button variant="secondary" className="d-grid gap-2 mybutton registration" size="lg" href='#question5' >This is not my beautiful wife!</Button>{' '}   
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            
         
            
            {/* <Button variant="secondary" className="d-grid gap-2 mybutton orientation" size="lg" href='#ipi' >Getting started.</Button>{' '}       */}
            
            {/* REGISTRATION AND CATALOG */}
            {/* <Button variant="secondary" className="d-grid gap-2 mybutton registration" size="lg" href='#ipi' >Registration</Button>{' '}       */}

            {/* COPYRIGHT AND ROYALTIES */}
            {/* <Button variant="secondary" className="d-grid gap-2 mybutton copyrights" size="lg" href='#ipi' >Copyright and Royalties</Button>{' '}    */}

              {/* LICENSORS */}
            {/* <Button variant="secondary" className="d-grid gap-2 mybutton licensors" size="lg" href='#ipi' >Licensors?</Button>{' '}  */}

            {/* WRITER AND PUBLISHER */}
            {/* <Button variant="secondary" className="d-grid gap-2 mybutton publisher" size="lg" href='#ipi' >Writer and Publisher</Button>{' '}  */}

            {/* BMI AND YOU */}
            {/* <Button variant="secondary" className="d-grid gap-2 mybutton you" size="lg" href='#ipi' >BMI and You!</Button>{' '}  */}

            {/* ONLINE SERVICES */}
            {/* <Button variant="secondary" className="d-grid gap-2 mybutton services" size="lg" href='#ipi' >Online Services</Button>{' '}  */}


          
    </div>
  );
}

export default TestTopics;
