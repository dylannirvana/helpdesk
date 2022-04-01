// import logo from './logo.svg';
import './App.scss';
import { Button } from 'react-bootstrap';


function Answer() {
  return (
      <div id='answer'>
        <h1>Here is an answer.</h1>
        <p>Duis Lorem incididunt anim quis.</p>
        <h3>Back to the top</h3>
        <Button variant="secondary" href='#anotheranswer' >Same as it ever was.</Button>{' '}
      </div>
  );
}

export default Answer;
