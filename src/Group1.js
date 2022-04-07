// import logo from './logo.svg';
import './App.scss';
import { Button } from 'react-bootstrap';


function Group1() {
  return (
    <div className='groups' >
        <h1>Overview</h1>
            <a href='./Group1.js'>Overview</a>
            <Button variant="secondary" className="d-grid gap-2 mybutton" size="lg" href='#question' >Well, how did I get here?</Button>{' '}      
            <Button variant="secondary" className="d-grid gap-2 mybutton" size="lg" href='#answer' >How do I work this?</Button>{' '}      
            <Button variant="secondary" className="d-grid gap-2 mybutton" size="lg" href='#anotheranswer' >This is not my beautiful house!</Button>{' '}      
            <Button variant="secondary" className="d-grid gap-2 mybutton" size="lg" href='#royalties' >Royalties</Button>{' '}      
    </div>
  );
}

export default Group1;
