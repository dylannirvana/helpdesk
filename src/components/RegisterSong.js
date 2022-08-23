import { Button } from 'react-bootstrap';

function RegisterSong() {
  return (
    <div id='registersong' className='section' >

      <h1>This is how you get paid</h1>

      <p className='container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      <h2>Where do I register my songs?</h2>

      <p className='container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>


      <div className='flex'>

        <Button variant="secondary" className='mybutton' href='https://applications.bmi.com/Security/' >Register my songs</Button>{' '}

        <Button variant="outline-secondary" className='mybutton' href='#registercatalog' >My catalog of works</Button>{' '}
      </div>

    </div>
  );
}

export default RegisterSong;
