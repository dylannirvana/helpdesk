import { Button } from 'react-bootstrap';

function PublisherRegister() {
  return (
      <div id='publisherregister' className='section' >
        <h1>Here is PublisherRegiser.</h1>
        <p>Duis Lorem incididunt anim quis.</p>
        <Button variant="secondary" href='#home' >Living in a shotgun shack.</Button>{' '}
        {/* Removing next button reinforces that you are the end of a section */}

      </div>
  );
}

export default PublisherRegister;
