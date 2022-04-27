import { Button } from 'react-bootstrap';

function YouBetter() {
  return (
      <div id='youbetter' className='section' >
        <h1>Here is YouBetter.</h1>
        <p>Duis Lorem incididunt anim quis.</p>
        <Button variant="secondary" className='mybutton' href='#home' >Living in a shotgun shack.</Button>{' '}
        <Button variant="outline-secondary" className='mybutton' href='#youstatement' >Next</Button>{' '}
      
      </div>
  );
}

export default YouBetter;
