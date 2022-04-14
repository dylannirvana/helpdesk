// import logo from './logo.svg';
import './App.scss';
import { Accordion, Button } from 'react-bootstrap';


function Topics() {
  return (
    <div  >
        <h1>Have any questions?</h1>
            {/* ORIENTATION */}
            <Accordion defaultActiveKey='0'>
              <Accordion.Item eventKey='0'>
                <Accordion.Header>Getting started</Accordion.Header>
                <Accordion.Body>
                  LoremSunt Lorem amet deserunt velit consectetur do in velit aute. Officia labore incididunt dolore aliqua occaecat pariatur incididunt dolore esse commodo consequat cillum in enim. Pariatur irure elit enim magna nostrud. Dolor reprehenderit amet enim ullamco duis exercitation ad in nostrud aliqua aliquip. Magna ut veniam eiusmod occaecat dolor aute laboris. Aute velit dolore velit minim sint amet culpa do sunt sunt velit id et.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Button variant="secondary" className="d-grid gap-2 mybutton orientation" size="lg" href='#ipi' >Getting started.</Button>{' '}      
            
            {/* REGISTRATION AND CATALOG */}
            <Button variant="secondary" className="d-grid gap-2 mybutton registration" size="lg" href='#ipi' >Registration</Button>{' '}      

            {/* COPYRIGHT AND ROYALTIES */}
            <Button variant="secondary" className="d-grid gap-2 mybutton copyrights" size="lg" href='#ipi' >Copyright and Royalties</Button>{' '}   

              {/* LICENSORS */}
            <Button variant="secondary" className="d-grid gap-2 mybutton licensors" size="lg" href='#ipi' >Licensors?</Button>{' '} 

            {/* WRITER AND PUBLISHER */}
            <Button variant="secondary" className="d-grid gap-2 mybutton publisher" size="lg" href='#ipi' >Writer and Publisher</Button>{' '} 

            {/* BMI AND YOU */}
            <Button variant="secondary" className="d-grid gap-2 mybutton you" size="lg" href='#ipi' >BMI and You!</Button>{' '} 

            {/* ONLINE SERVICES */}
            <Button variant="secondary" className="d-grid gap-2 mybutton services" size="lg" href='#ipi' >Online Services</Button>{' '} 


          
    </div>
  );
}

export default Topics;
