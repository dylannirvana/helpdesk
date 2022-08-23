import { Button } from 'react-bootstrap';

function YouLive() {
  return (
    <div id='youlive' className='section' >
      <h1>BMI Live</h1>

      <p className='container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      <h2>Get paid for performing your music</h2>

      <p className='container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

      <div className='flex'>
        <Button variant="secondary" className='mybutton' href='https://www.bmi.com/' >Register your performances</Button>{' '}

        <Button variant="outline-secondary" className='mybutton' href='#youlearn' >I want to learn</Button>{' '}
      </div>

    </div>
  );
}

export default YouLive;
