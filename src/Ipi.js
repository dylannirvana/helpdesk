// import logo from './logo.svg';
import './App.scss';
import { Button } from 'react-bootstrap';


function Ipi() {
  return (
      <div id='ipi'>
        <h1>Your IPI Number</h1>
        <p>An Interested Party Information number, or IPI, is an internationally recognised indentifier used to pay and track royalties to the writer or composer and the publisher of a musical composition. </p>
        <p>If you're a member of BMI, here is where you can find <a href='#'>Your IPI Number</a> . Like to learn more about how the IPI Number is used? Look at <a href='#'>IPI in Context</a> </p>
        <Button variant="secondary" href='#home' >Have another question?</Button>{' '}
      </div>
  );
}

export default Ipi;
