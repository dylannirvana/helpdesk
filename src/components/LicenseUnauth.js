import { Button } from 'react-bootstrap';

function LicenseUnauth() {
  return (
      <div id='licenseunauth' className='section' >
        <h1>Unauthorized use of your music may be a crime</h1>

        <p className='container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
        <h2>Intellectual property rights</h2>

        <p className='container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

        <Button variant="secondary" className='mybutton' href='https://applications.bmi.com/Security/' >Join BMI as a Licensor</Button>{' '}

        <div className='flex'>
          {/* <Button variant="secondary" className='mybutton' href='#home' >Join BMI as a Licensor</Button>{' '} */}

          <Button variant="outline-secondary" className='mybutton' href='#home' >More questions?</Button>{' '}
        </div>

      </div>
  );
}

export default LicenseUnauth;
