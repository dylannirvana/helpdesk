import { Button } from 'react-bootstrap';

function StartSignup() {
  return (
      <div id='startsignup' className='section' >
        
        <h1>Signing up with BMI</h1>

        <p className='container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
        <Button variant="secondary" className='mybutton' href='https://www.bmi.com/creators/agreement' >Affiliation Agreement</Button>{' '}

        <div className='flex'>
          {/* <Button variant="outline-secondary" className='mybutton' href='#home' >More questions?</Button>{' '} */}

          <Button variant="outline-secondary" className='mybutton' href='#startstatus' >What happens next?</Button>{' '}
        </div>

      </div>
  );
}

export default StartSignup;
