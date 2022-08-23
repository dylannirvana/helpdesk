import { Button } from 'react-bootstrap';

function YouCatalog() {
  return (
      <div id='youcatalog' className='section' >
        <h1>My BMI catalog</h1>

        <p className='container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
        <Button variant="secondary" className='mybutton' href='https://www.bmi.com/' >My catalog</Button>{' '}

        <Button variant="outline-secondary" className='mybutton' href='#youestate' >My estate</Button>{' '}
      
      </div>
  );
}

export default YouCatalog;
