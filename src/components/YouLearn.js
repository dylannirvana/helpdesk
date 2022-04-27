import { Button } from 'react-bootstrap';

function YouLearn() {
  return (
      <div id='youlearn' className='section' >
        <h1>Here is YouLearn.</h1>
        <p>Duis Lorem incididunt anim quis.</p>
        <Button variant="secondary" className='mybutton' href='#home' >Living in a shotgun shack.</Button>{' '}
        <Button variant="outline-secondary" className='mybutton' href='#youbetter' >Next</Button>{' '}

      </div>
  );
}

export default YouLearn;
