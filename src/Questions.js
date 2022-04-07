// import logo from './logo.svg';
import './App.scss';
import { Button } from 'react-bootstrap';


function Questions() {
  return (
    <div >
        <h1>Have any questions?</h1>
            {/* ORIENTATION */}
            <Button variant="secondary" className="d-grid gap-2 mybutton orientation" size="lg" href='#ipi' >What is BMI?</Button>{' '}      
            <Button variant="secondary" className="d-grid gap-2 mybutton orientation" size="lg" href='#ipi' >What does BMI do?</Button>{' '}      
            <Button variant="secondary" className="d-grid gap-2 mybutton orientation" size="lg" href='#ipi' >Signing up with BMI</Button>{' '}      
            <Button variant="secondary" className="d-grid gap-2 mybutton orientation" size="lg" href='#ipi' >Application status</Button>{' '}      
            <Button variant="secondary" className="d-grid gap-2 mybutton orientation" size="lg" href='#ipi' >Understanding your Contract</Button>{' '}      
            <Button variant="secondary" className="d-grid gap-2 mybutton orientation" size="lg" href='#ipi' >Terminating your Contract</Button>{' '}      
            
            {/* REGISTRATION AND CATALOG */}
            <Button variant="secondary" className="d-grid gap-2 mybutton registration" size="lg" href='#ipi' >Registering my songs</Button>{' '}      
            <Button variant="secondary" className="d-grid gap-2 mybutton registration" size="lg" href='#ipi' >My Catalog of Works</Button>{' '}      
            <Button variant="secondary" className="d-grid gap-2 mybutton registration" size="lg" href='#ipi' >Making changes</Button>{' '}   

            {/* COPYRIGHT AND ROYALTIES */}
            <Button variant="secondary" className="d-grid gap-2 mybutton copyrights" size="lg" href='#ipi' >What are Performance Royalties</Button>{' '}   
            <Button variant="secondary" className="d-grid gap-2 mybutton copyrights" size="lg" href='#ipi' >Why haven't I gotten paid?</Button>{' '}   
            <Button variant="secondary" className="d-grid gap-2 mybutton copyrights" size="lg" href='#ipi' >Do you send checks?</Button>{' '}   
            <Button variant="secondary" className="d-grid gap-2 mybutton copyrights" size="lg" href='#ipi' >It's all about Copyright</Button>{' '}   
            <Button variant="secondary" className="d-grid gap-2 mybutton copyrights" size="lg" href='#ipi' >What is my IPI number?</Button>{' '}   
            <Button variant="secondary" className="d-grid gap-2 mybutton copyrights" size="lg" href='#ipi' >What are Royalties?</Button>{' '}   
            <Button variant="secondary" className="d-grid gap-2 mybutton copyrights" size="lg" href='#ipi' >Can I get an advance?</Button>{' '} 

              {/* LICENSORS */}
            <Button variant="secondary" className="d-grid gap-2 mybutton licensors" size="lg" href='#ipi' >Who pays BMI?</Button>{' '} 
            <Button variant="secondary" className="d-grid gap-2 mybutton licensors" size="lg" href='#ipi' >ISRC vs ISWC</Button>{' '} 
            <Button variant="secondary" className="d-grid gap-2 mybutton licensors" size="lg" href='#ipi' >Uauthorized use</Button>{' '} 

            {/* WRITER AND PUBLISHER */}
            <Button variant="secondary" className="d-grid gap-2 mybutton publisher" size="lg" href='#ipi' >Do I need a Publisher?</Button>{' '} 
            <Button variant="secondary" className="d-grid gap-2 mybutton publisher" size="lg" href='#ipi' >The Music Modernization Act</Button>{' '} 
            <Button variant="secondary" className="d-grid gap-2 mybutton publisher" size="lg" href='#ipi' >Foreign Royalties (Neighbouring Rights)</Button>{' '} 
            <Button variant="secondary" className="d-grid gap-2 mybutton publisher" size="lg" href='#ipi' >Register as a BMI Publisher</Button>{' '} 

            {/* BMI AND YOU */}
            <Button variant="secondary" className="d-grid gap-2 mybutton you" size="lg" href='#ipi' >I am an Artist too</Button>{' '} 
            <Button variant="secondary" className="d-grid gap-2 mybutton you" size="lg" href='#ipi' >BMI Live!</Button>{' '} 
            <Button variant="secondary" className="d-grid gap-2 mybutton you" size="lg" href='#ipi' >I want to learn</Button>{' '} 
            <Button variant="secondary" className="d-grid gap-2 mybutton you" size="lg" href='#ipi' >Getting better</Button>{' '} 
            <Button variant="secondary" className="d-grid gap-2 mybutton you" size="lg" href='#ipi' >My Statements</Button>{' '} 
            <Button variant="secondary" className="d-grid gap-2 mybutton you" size="lg" href='#ipi' >My Catalog</Button>{' '} 
            <Button variant="secondary" className="d-grid gap-2 mybutton you" size="lg" href='#ipi' >Estate, heirs</Button>{' '} 

            {/* ONLINE SERVICES */}
            <Button variant="secondary" className="d-grid gap-2 mybutton services" size="lg" href='#ipi' >Online services</Button>{' '} 
            <Button variant="secondary" className="d-grid gap-2 mybutton services" size="lg" href='#ipi' >Update contact information</Button>{' '} 
            <Button variant="secondary" className="d-grid gap-2 mybutton services" size="lg" href='#ipi' >Update banking information</Button>{' '} 
            <Button variant="secondary" className="d-grid gap-2 mybutton services" size="lg" href='#ipi' >Songview!</Button>{' '} 


            
















            {/* <Button variant="secondary" className="d-grid gap-2 mybutton" size="lg" href='#ipi' >What is my IPI Number?</Button>{' '}      
            <Button variant="secondary" className="d-grid gap-2 mybutton" size="lg" href='#estate' >Questions about my estate</Button>{' '}      
            <Button variant="secondary" className="d-grid gap-2 mybutton" size="lg" href='#copyright' >My Copyright</Button>{' '}      
            <Button variant="secondary" className="d-grid gap-2 mybutton" size="lg" href='#royalties' >Royalties</Button>{' '}   */}

            {/* <Button variant="secondary" className="d-grid gap-2 mybutton" size="lg" href='#question' >Well, how did I get here?</Button>{' '}      
            <Button variant="secondary" className="d-grid gap-2 mybutton" size="lg" href='#answer' >How do I work this?</Button>{' '}      
            <Button variant="secondary" className="d-grid gap-2 mybutton" size="lg" href='#anotheranswer' >This is not my beautiful house!</Button>{' '}     */}
    </div>
  );
}

export default Questions;
