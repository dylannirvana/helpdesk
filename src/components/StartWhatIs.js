import { Button } from 'react-bootstrap';

function StartWhatIs() {
  return (
      <div id='startwhatis' className='section' >
        <h1>Here is StartWhatIs.</h1>
        <p>Duis Lorem incididunt anim quis.</p>
        <Button variant="secondary" className='mybutton' href='#home' >Living in a shotgun shack.</Button>{' '}
        <Button variant="outline-secondary" className='mybutton' href='#startwhatdoes' >Next</Button>{' '}      

      </div>
  );
}

export default StartWhatIs;
