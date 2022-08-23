import { Button } from 'react-bootstrap';

function RegisterCatalog() {
  return (
      <div id='registercatalog' className='section' >
        <h1>My catalog of works</h1>

        <p className='container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <p className='container'>Again, make sure your songs are registered.</p>

        {/* <Button variant="secondary" className='mybutton' href='https://applications.bmi.com/Security/' >Register my songs</Button>{' '} */}

        <div className='flex'>
          <Button variant="secondary" className='mybutton' href='https://bmi.com' >See my catalog</Button>{' '}

          <Button variant="outline-secondary" className='mybutton' href='#registerchange' >Making changes to your catalog</Button>{' '}
        </div>
        
      </div>
  );
}

export default RegisterCatalog;
