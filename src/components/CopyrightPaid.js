import { Button } from 'react-bootstrap';

function CopyrightPaid() {
  return (
      <div id='copyrightpaid' className='section' >
        <h1>Here is an answer.</h1>
        <p>Duis Lorem incididunt anim quis.</p>
        <Button variant="secondary" href='#home' >Living in a shotgun shack.</Button>{' '}
        <Button variant="outline-secondary" className='mybutton' href='#copyrightcheck' >Next</Button>{' '}      

      </div>
  );
}

export default CopyrightPaid;
