// import logo from './logo.svg';
import './App.scss';
import { Button } from 'react-bootstrap';


function Question() {
  return (
    <div >
        <h1>Have any questions?</h1>
        <Button variant="secondary" href='#answer' >Well, how did I get here?</Button>{' '}      
    </div>
  );
}

export default Question;
