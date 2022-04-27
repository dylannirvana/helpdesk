import { Button } from 'react-bootstrap';

function LicenseUnauth() {
  return (
      <div id='licenseunauth' className='section' >
        <h1>Here is an LicenseUnauth.</h1>
        <p>Duis Lorem incididunt anim quis.</p>
        <Button variant="secondary" href='#home' >Living in a shotgun shack.</Button>{' '}
        {/* Removing next button reinforces that you are the end of a section */}

      </div>
  );
}

export default LicenseUnauth;
