import { Button } from 'react-bootstrap';

function ServicesOnline() {
  return (
    <div id='servicesonline' className='section'>

      <h1>Online services</h1>

      <p className='container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      <h2>Explanation of our interface</h2>

      <p className='container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

      <div className='flex'>
        <Button variant="secondary" className='mybutton' href='https://applications.bmi.com/Security/' >Join BMI / Login</Button>{' '}

        <Button variant="outline-secondary" className='mybutton' href='#servicescontact' >Updating my information</Button>{' '}
      </div>

    </div>
  );
}

export default ServicesOnline;
