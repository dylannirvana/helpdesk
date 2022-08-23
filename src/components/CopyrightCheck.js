import { Button } from 'react-bootstrap';

function CopyrightCheck() {
  return (
    <div id='copyrightcheck' className='section' >

      <h1>I haven't gotten my check</h1>

      <p className='container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>


      <div className='flex'>
        <Button variant="secondary" className='mybutton' href='https://applications.bmi.com/Security/' >Have you registered your songs?</Button>{' '}

        <Button variant="outline-secondary" className='mybutton' href='#copyrightabout' >Understanding copyright</Button>{' '}
      </div>

    </div>
  );
}

export default CopyrightCheck;
