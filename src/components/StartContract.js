import { Button } from 'react-bootstrap';

function StartContract() {
  return (
      <div id='startcontract' className='section' >

        <h1>Understanding your contract</h1>

        <p className='container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <Button variant="secondary" className='mybutton' href='https://www.bmi.com/' >Need more help?</Button>{' '}

        <div className='flex'>
          {/* <Button variant="outline-secondary" className='mybutton' href='#home' >Need more help?</Button>{' '} */}
          {/* this is supposed to go to a form */}

          <Button variant="outline-secondary" className='mybutton' href='#startterminate' >Terminating your contract</Button>{' '}
        </div>
          
      </div>
  );
}

export default StartContract;
