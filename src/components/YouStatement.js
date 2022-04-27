import { Button } from 'react-bootstrap';

function YouStatement() {
  return (
      <div id='youstatement' className='section' >
        <h1>Here is aYouStatement.</h1>
        <p>Duis Lorem incididunt anim quis.</p>
        <Button variant="secondary" className='mybutton' href='#home' >Living in a shotgun shack.</Button>{' '}
        <Button variant="outline-secondary" className='mybutton' href='#youcatalog' >Next</Button>{' '}

      </div>
  );
}

export default YouStatement;
