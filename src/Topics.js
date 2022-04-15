// import logo from './logo.svg';
import './App.scss';
import { Accordion, Button } from 'react-bootstrap';


function Topics() {
  return (
    <div className='mycontainer' >
        <h1>Have any questions?</h1>
            {/* ORIENTATION */}
            <Accordion >
              <Accordion.Item className='' eventKey='0'>
                <Accordion.Header>Getting Started?</Accordion.Header>
                <Accordion.Body>
                <Button variant="secondary" className="d-grid gap-2 mybutton orientation" size="lg" href='#ipi' >What is BMI?</Button>{' '}      
                <Button variant="secondary" className="d-grid gap-2 mybutton orientation" size="lg" href='#ipi' >What does BMI do?</Button>{' '}      

                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion >
              <Accordion.Item className='' eventKey='0'>
                <Accordion.Header>Registration and Catalog</Accordion.Header>
                <Accordion.Body>
                  {/* REGISTRATION AND CATALOG */}
                  <Button variant="secondary" className="d-grid gap-2 mybutton registration" size="lg" href='#ipi' >Registering my songs</Button>{' '}      
                  <Button variant="secondary" className="d-grid gap-2 mybutton registration" size="lg" href='#ipi' >My Catalog of Works</Button>{' '}      
                  <Button variant="secondary" className="d-grid gap-2 mybutton registration" size="lg" href='#ipi' >Making changes</Button>{' '}   

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

export default Topics;
