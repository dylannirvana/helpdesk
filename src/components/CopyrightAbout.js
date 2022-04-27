import { Button } from 'react-bootstrap';

function CopyrightAbout() {
  return (
      <div id='copyrightabout' className='section' >
        <h1>Here is CopyrightAbout.</h1>
        <p>Duis Lorem incididunt anim quis.</p>
        <Button variant="secondary" className='mybutton' href='#home' >Living in a shotgun shack.</Button>{' '}
        <Button variant="outline-secondary" className='mybutton' href='#copyrightipi' >Next</Button>{' '}      

      </div>
  );
}

export default CopyrightAbout;
