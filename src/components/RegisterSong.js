import { Button } from 'react-bootstrap';

function RegisterSong() {
  return (
      <div id='registersong' className='section' >
        <h1>Here is RegisterSong.</h1>
        <p>Duis Lorem incididunt anim quis.</p>
        <Button variant="secondary" className='mybutton' href='#home' >Living in a shotgun shack.</Button>{' '}
        <Button variant="outline-secondary" className='mybutton' href='#registerworks' >Next</Button>{' '}
        
      </div>
  );
}

export default RegisterSong;
