import { Button } from 'react-bootstrap';

function YouLive() {
  return (
      <div id='youlive' className='section' >
        <h1>Get paid for performing your music</h1>

        <p className='container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
        <h2>Register your songs and performances</h2>

        <p className='container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        
        <Button variant="secondary" className='mybutton' href='https://www.bmi.com/' >Register your performances</Button>{' '}

        {/* <Button variant="secondary" className='mybutton' href='#home' >Living in a shotgun shack.</Button>{' '} */}

        <Button variant="outline-secondary" className='mybutton' href='#youlearn' >I want to learn</Button>{' '}
      
      </div>
  );
}

export default YouLive;
