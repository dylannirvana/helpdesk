import { Button } from 'react-bootstrap';

function StartWhatDoes() {
  return (
      <div id='startwhatdoes' className='section' >
        <h1>Here is StartWhatDoes.</h1>
        <p>Duis Lorem incididunt anim quis.</p>
        <Button variant="secondary" className='mybutton' href='#home' >Living in a shotgun shack.</Button>{' '}
        <Button variant="outline-secondary" className='mybutton' href='#startsignup' >Next</Button>{' '}

      </div>
  );
}

export default StartWhatDoes;
