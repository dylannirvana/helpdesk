import { Button } from 'react-bootstrap';

function RegisterChange() {
  return (
      <div id='registerchange' className='section' >
        <h1>Making changes to your catalog</h1>

        <p className='container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <Button variant="secondary" className='mybutton' href='https://applications.bmi.com/Security/' >My catalog / Join</Button>{' '}

        <div className='flex'>
          <Button variant="outline-secondary" className='mybutton' href='#home' >More questions?</Button>{' '}

          {/* <Button variant="outline-secondary" className='mybutton' href='#registercatalog' >My catalog of works</Button>{' '} */}
        </div>
        
       
      </div>
  );
}

export default RegisterChange;
