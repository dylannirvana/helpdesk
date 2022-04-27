import { Button } from 'react-bootstrap';

function StartSignup() {
  return (
      <div id='startsignup' className='section' >
        <h1>Here is StartSignup.</h1>
        <p>Duis Lorem incididunt anim quis.</p>
        <Button variant="secondary" className='mybutton' href='#home' >Living in a shotgun shack.</Button>{' '}
        <Button variant="outline-secondary" className='mybutton' href='#startstatus' >Next</Button>{' '}
      </div>
  );
}

export default StartSignup;
