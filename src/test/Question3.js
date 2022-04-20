// import logo from './logo.svg';
// import './App.scss';
import { Button } from 'react-bootstrap';


function Question3() {
  return (
      <div id='question3'>
        <h1>Here is another answer.</h1>
        <p>Duis Lorem incididunt anim quis.</p>
        <h3>Back to the top</h3>
        <Button variant="secondary" href='#top' >Same as it ever was.</Button>{' '}
        <Button variant="outline-secondary" className='mybutton' href='#carousel1' >Next</Button>{' '}      

      </div>
  );
}

export default Question3;
