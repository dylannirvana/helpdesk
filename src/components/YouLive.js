import { Button } from 'react-bootstrap';

function YouLive() {
  return (
      <div id='youlive' className='section' >
        <h1>Here is YouLive.</h1>
        <p>Duis Lorem incididunt anim quis.</p>
        <Button variant="secondary" className='mybutton' href='#home' >Living in a shotgun shack.</Button>{' '}
        <Button variant="outline-secondary" className='mybutton' href='#youlearn' >Next</Button>{' '}
      
      </div>
  );
}

export default YouLive;
