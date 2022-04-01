// import logo from './logo.svg';
import './App.scss';
import { Button } from 'react-bootstrap';


function Questions() {
  return (
    <div >
        <h1>Have any questions?</h1>
            <Button variant="secondary" className="d-grid gap-2 mybutton" size="lg" href='#question' >Well, how did I get here?</Button>{' '}      
            <Button variant="secondary" className="d-grid gap-2 mybutton" size="lg" href='#answer' >How do I work this?</Button>{' '}      
            <Button variant="secondary" className="d-grid gap-2 mybutton" size="lg" href='#anotheranswer' >This is not my beautiful house!</Button>{' '}      
            <Button variant="secondary" className="d-grid gap-2 mybutton" size="lg" href='#ipi' >What is my IPI Number?</Button>{' '}      
            <Button variant="secondary" className="d-grid gap-2 mybutton" size="lg" href='#estate' >Questions about my estate</Button>{' '}      
            <Button variant="secondary" className="d-grid gap-2 mybutton" size="lg" href='#copyright' >My Copyright</Button>{' '}      
            <Button variant="secondary" className="d-grid gap-2 mybutton" size="lg" href='#royalties' >Royalties</Button>{' '}      
    </div>
  );
}

export default Questions;
