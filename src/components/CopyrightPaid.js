import { Button } from 'react-bootstrap';

function CopyrightPaid() {
  return (
      <div id='copyrightpaid' className='section' >

        <h1>Where are my royalties?</h1>

        <p className='container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>


        <div className='flex'>
        <Button variant="secondary" className='mybutton' href='https://applications.bmi.com/Security/' >My statements</Button>{' '}

          <Button variant="outline-secondary" className='mybutton' href='#copyrightcheck' >Do you send checks?</Button>{' '}
        </div>

      </div>
  );
}

export default CopyrightPaid;
