import { Button } from 'react-bootstrap';

function YouArtist() {
  return (
      <div id='youartist' className='section' >
        <h1>Here is YouArtist.</h1>
        <p>Duis Lorem incididunt anim quis.</p>
        <Button variant="secondary" className='mybutton' href='#home' >Living in a shotgun shack.</Button>{' '}
        <Button variant="outline-secondary" className='mybutton' href='#youlive' >Next</Button>{''}
      
      </div>
  );
}

export default YouArtist;
