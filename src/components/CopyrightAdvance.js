import { Button } from 'react-bootstrap';

function CopyrightAdvance() {
  return (
    <div id='copyrightadvance' className='section' >
      <h1>Can I get an advance on my royalties?</h1>

      <p className='container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>


      <div className='flex'>
        <Button variant="secondary" className='mybutton' href='https://applications.bmi.com/Security/' >Fill out form</Button>{' '}

        <Button variant="outline-secondary" className='mybutton' href='#home' >More questions?</Button>{' '}
      </div>

    </div>
  );
}

export default CopyrightAdvance;
