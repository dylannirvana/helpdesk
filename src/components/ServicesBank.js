import { Button } from 'react-bootstrap';

function ServicesBank() {
  return (
    <div id='servicesbank' className='section' >

      <h1>Updating my banking information</h1>

      <p className='container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      <div className='flex'>
        <Button variant="secondary" className='mybutton' href='https://applications.bmi.com/Security/' >Update my banking information</Button>{' '}

        <Button variant="outline-secondary" className='mybutton' href='#servicessongview' >Using Songview</Button>{' '}
      </div>

    </div>
  );
}

export default ServicesBank;
