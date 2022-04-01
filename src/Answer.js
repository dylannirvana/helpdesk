// import logo from './logo.svg';
import './App.scss';
import { Button } from 'react-bootstrap';


function Answer() {
  return (
      <div id='answer'>
        <h1>Here is an answer.</h1>
        <p>Duis Lorem incididunt anim quis.</p>
        <Button variant="secondary" href='#anotheranswer' >Living in a shotgun shack.</Button>{' '}
      </div>
  );
}

export default Answer;
