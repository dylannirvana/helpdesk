import { Button } from 'react-bootstrap';

function ServicesOnline() {
  return (
      <div id='servicesonline' className='section'>
        <h1>Here is ServicesOnline.</h1>
        <p>Duis Lorem incididunt anim quis.</p>
        <Button variant="secondary" className='mybutton' href='#home' >Living in a shotgun shack.</Button>{' '}
        <Button variant="outline-secondary" className='mybutton' href='#servicescontact' >Next</Button>{' '}

      </div>
  );
}

export default ServicesOnline;
