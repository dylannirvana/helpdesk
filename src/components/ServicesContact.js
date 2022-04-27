import { Button } from 'react-bootstrap';

function ServicesContact() {
  return (
      <div id='servicescontact' className='section' >
        <h1>Here is ServicesContact.</h1>
        <p>Duis Lorem incididunt anim quis.</p>
        <Button variant="secondary" className='mybutton' href='#home' >Living in a shotgun shack.</Button>{' '}
        <Button variant="outline-secondary" className='mybutton' href='#servicesbank' >Next</Button>{' '}

      </div>
  );
}

export default ServicesContact;
