// import logo from './logo.svg';
// import './App.scss';
import { Button } from 'react-bootstrap';


function Question1() {
  return (
    <div id='question1' className='section' >
        <h1>Have any questions?</h1>
        <Button variant="secondary" href='#top' >This is not my beautiful wife</Button>{' '}      
        <Button variant="outline-secondary" className='mybutton' href='#question2' >Next</Button>{' '}      
    </div>
  );
}

export default Question1;
