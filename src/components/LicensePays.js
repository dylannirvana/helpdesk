import { Button } from 'react-bootstrap';

function LicensePays() {
  return (
      <div id='licensepays' className='section' >
        
        <h1>Who pays BMI?</h1>
        <h2>Collection of Performance Royalties</h2>
        <p className='container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
        <h2>Licensors. (But not sync!)</h2>

        <p className='container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

        <Button variant="secondary" className='mybutton' href='https://applications.bmi.com/Security/' >Join BMI as a Licensor</Button>{' '}

        <div className='flex'>
          {/* <Button variant="secondary" className='mybutton' href='#home' >Join BMI as a Licensor</Button>{' '} */}

          <Button variant="outline-secondary" className='mybutton' href='#licenseisrc' >ISWC vs ISRC</Button>{' '}
        </div> 

      </div>
  );
}

export default LicensePays;
