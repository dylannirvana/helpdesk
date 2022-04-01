// import logo from './logo.svg';
import './App.scss';
import { Button } from 'react-bootstrap';


function AnotherAnswer() {
  return (
      <div id='anotheranswer'>
        <h1>Here is another answer.</h1>
        <p>Duis Lorem incididunt anim quis.</p>
        <h3>Back to the top</h3>
        <Button variant="secondary" href='#home' >Same as it ever was.</Button>{' '}
      </div>
  );
}

export default AnotherAnswer;
