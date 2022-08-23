import { Button } from 'react-bootstrap';

function StartWhatDoes() {
  return (
      <div id='startwhatdoes' className='section' >
        
        <h1>What does BMI do?</h1>

        <p className='container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        {/* <Button variant="secondary" className='mybutton' href='https://www.bmi.com/' >Join or Login</Button>{' '} */}

        <div className='flex'>
          {/* <Button variant="outline-secondary" className='mybutton' href='#home' >More questions?</Button>{' '} */}

          <Button variant="outline-secondary" className='mybutton' href='#startsignup' >Signing up</Button>{' '}
        </div>

      </div>
  );
}

export default StartWhatDoes;
