// import logo from './logo.svg';
import './App.scss';
import { Accordion, Button } from 'react-bootstrap';

// NOTE: Using the tee command. tee CpCheck.jsCpCopy.js CpIpi.js CpRoy.js CpAdv.js < Answer.js 
// Single source multiple destination. cp doesn't do that. Note the reverse syntax

function Topics() {
  return (
    <div className='mycontainer' >
        <h1>Have any questions?</h1>
            {/* ORIENTATION */}
            <Accordion className='myaccordion' >
              <Accordion.Item className='' eventKey='0'>
                <Accordion.Header>Getting Started?</Accordion.Header>
                <Accordion.Body>
                <Button variant="secondary" className="d-grid gap-2 mybutton orientation" size="lg" href='#mycarousel' >What is BMI?</Button>{' '}      
                <Button variant="secondary" className="d-grid gap-2 mybutton orientation" size="lg" href='#ipi' >What does BMI do?</Button>{' '}      
                <Button variant="secondary" className="d-grid gap-2 mybutton orientation" size="lg" href='#ipi' >Signing up with BMI</Button>{' '}      
                <Button variant="secondary" className="d-grid gap-2 mybutton orientation" size="lg" href='#ipi' >Application status</Button>{' '}      
                <Button variant="secondary" className="d-grid gap-2 mybutton orientation" size="lg" href='#ipi' >Understanding your Contract</Button>{' '}      
                <Button variant="secondary" className="d-grid gap-2 mybutton orientation" size="lg" href='#ipi' >Terminating your Contract</Button>{' '}      
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion className='myaccordion' >
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
            
            <Accordion className='myaccordion' >
              <Accordion.Item className='' eventKey='0'>
                <Accordion.Header>Copyright and Royalties</Accordion.Header>
                <Accordion.Body>
                  {/* COPYRIGHT AND ROYALTIES */}
                  <Button variant="secondary" className="d-grid gap-2 mybutton copyrights" size="lg" href='#copyrightperformance' >What are Performance Royalties</Button>{' '}   
                  <Button variant="secondary" className="d-grid gap-2 mybutton copyrights" size="lg" href='#copyrightpaid' >Why haven't I gotten paid?</Button>{' '}   
                  <Button variant="secondary" className="d-grid gap-2 mybutton copyrights" size="lg" href='#copyrightcheck' >Do you send checks?</Button>{' '}   
                  <Button variant="secondary" className="d-grid gap-2 mybutton copyrights" size="lg" href='#copyrightabout' >It's all about Copyright</Button>{' '}   
                  <Button variant="secondary" className="d-grid gap-2 mybutton copyrights" size="lg" href='#copyrightipi' >What is my IPI number?</Button>{' '}   
                  <Button variant="secondary" className="d-grid gap-2 mybutton copyrights" size="lg" href='#copyrightroyalty' >What are Royalties?</Button>{' '}   
                  <Button variant="secondary" className="d-grid gap-2 mybutton copyrights" size="lg" href='#copyrightadvance' >Can I get an advance?</Button>{' '} 
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
           
            <Accordion className='myaccordion' >
              <Accordion.Item className='' eventKey='0'>
                <Accordion.Header>Businesses Requesting a BMI License</Accordion.Header>
                <Accordion.Body>
                  {/* LICENSORS */}
                  <Button variant="secondary" className="d-grid gap-2 mybutton licensors" size="lg" href='#licensepays' >Who pays BMI?</Button>{' '} 
                  <Button variant="secondary" className="d-grid gap-2 mybutton licensors" size="lg" href='#licenseisrc' >ISRC vs ISWC</Button>{' '} 
                  <Button variant="secondary" className="d-grid gap-2 mybutton licensors" size="lg" href='#licenseunauth' >Uauthorized use</Button>{' '} 
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
           
            <Accordion className='myaccordion' >
              <Accordion.Item className='' eventKey='0'>
                <Accordion.Header>Writer and Publisher</Accordion.Header>
                <Accordion.Body>
                  {/* WRITER AND PUBLISHER */}
                  <Button variant="secondary" className="d-grid gap-2 mybutton publisher" size="lg" href='#publisherneed' >Do I need a Publisher?</Button>{' '} 
                  <Button variant="secondary" className="d-grid gap-2 mybutton publisher" size="lg" href='#publishermma' >The Music Modernization Act</Button>{' '} 
                  <Button variant="secondary" className="d-grid gap-2 mybutton publisher" size="lg" href='#publisherforeign' >Foreign Royalties (Neighbouring Rights)</Button>{' '} 
                  <Button variant="secondary" className="d-grid gap-2 mybutton publisher" size="lg" href='#publisherregister' >Register as a BMI Publisher</Button>{' '} 
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            
            <Accordion className='myaccordion' >
              <Accordion.Item className='' eventKey='0'>
                <Accordion.Header>BMI and You</Accordion.Header>
                <Accordion.Body>
                  {/* BMI AND YOU */}
                  <Button variant="secondary" className="d-grid gap-2 mybutton you" size="lg" href='#ipi' >I am an Artist too</Button>{' '} 
                  <Button variant="secondary" className="d-grid gap-2 mybutton you" size="lg" href='#ipi' >BMI Live!</Button>{' '} 
                  <Button variant="secondary" className="d-grid gap-2 mybutton you" size="lg" href='#ipi' >I want to learn</Button>{' '} 
                  <Button variant="secondary" className="d-grid gap-2 mybutton you" size="lg" href='#ipi' >Getting better</Button>{' '} 
                  <Button variant="secondary" className="d-grid gap-2 mybutton you" size="lg" href='#ipi' >My Statements</Button>{' '} 
                  <Button variant="secondary" className="d-grid gap-2 mybutton you" size="lg" href='#ipi' >My Catalog</Button>{' '} 
                  <Button variant="secondary" className="d-grid gap-2 mybutton you" size="lg" href='#ipi' >Estate, heirs</Button>{' '} 
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            
            <Accordion className='myaccordion' >
              <Accordion.Item className='' eventKey='0'>
                <Accordion.Header>Online Services</Accordion.Header>
                <Accordion.Body>
                  {/* ONLINE SERVICES */}
                  <Button variant="secondary" className="d-grid gap-2 mybutton services" size="lg" href='#ipi' >Online services</Button>{' '} 
                  <Button variant="secondary" className="d-grid gap-2 mybutton services" size="lg" href='#ipi' >Update contact information</Button>{' '} 
                  <Button variant="secondary" className="d-grid gap-2 mybutton services" size="lg" href='#ipi' >Update banking information</Button>{' '} 
                  <Button variant="secondary" className="d-grid gap-2 mybutton services" size="lg" href='#ipi' >Songview!</Button>{' '} 
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
