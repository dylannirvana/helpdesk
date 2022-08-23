import { Button } from 'react-bootstrap';

function StartStatus() {
  return (
      <div id='startstatus' className='section' >
        
        <h1>What is my application status?</h1>

        <p className='container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <h2>Using online services</h2>

        <p className='container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        {/* <Button variant="secondary" className='mybutton' href='https://www.bmi.com/' >Action Module</Button>{' '} */}

        <div className='flex'>
          {/* <Button variant="outline-secondary" className='mybutton' href='#home' >More questions?</Button>{' '} */}

          <Button variant="outline-secondary" className='mybutton' href='#startcontract' >Understanding your contract</Button>{' '}
        </div>

      </div>
  );
}

export default StartStatus;
