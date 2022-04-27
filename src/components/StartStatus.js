import { Button } from 'react-bootstrap';

function StartStatus() {
  return (
      <div id='startstatus' className='section' >
        <h1>Here is StartStatus.</h1>
        <p>Duis Lorem incididunt anim quis.</p>
        <Button variant="secondary" className='mybutton' href='#home' >Living in a shotgun shack.</Button>{' '}
        <Button variant="outline-secondary" className='mybutton' href='#startcontract' >Next</Button>{' '}

      </div>
  );
}

export default StartStatus;
