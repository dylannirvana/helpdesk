// import logo from './logo.svg';
import './App.scss';
import { Button } from 'react-bootstrap';


function Question() {
  return (
    <div id='question'>
        <h1>Have any questions?</h1>
        <Button variant="secondary" href='#answer' >This is not my beautiful wife</Button>{' '}      
    </div>
  );
}

export default Question;
