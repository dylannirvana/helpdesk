import { Button } from 'react-bootstrap';

function StartContract() {
  return (
      <div id='startcontract' className='section' >
        <h1>Here is StartContract.</h1>
        <p>Duis Lorem incididunt anim quis.</p>
        <Button variant="secondary" className='mybutton' href='#home' >Living in a shotgun shack.</Button>{' '}
        <Button variant="outline-secondary" className='mybutton' href='#startterminate' >Next</Button>{' '}
      </div>
  );
}

export default StartContract;
