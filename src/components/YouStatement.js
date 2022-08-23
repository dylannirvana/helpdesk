import { Button } from 'react-bootstrap';

function YouStatement() {
  return (
      <div id='youstatement' className='section' >
        <h1>Does BMI send me statements? Yes!</h1>

        <p className='container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
        <h2>Where are my statements?</h2>

        <p className='container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        
        <Button variant="secondary" className='mybutton' href='https://www.bmi.com/' >My statements</Button>{' '}

        {/* <Button variant="secondary" className='mybutton' href='#home' >Living in a shotgun shack.</Button>{' '} */}

        <Button variant="outline-secondary" className='mybutton' href='#youcatalog' >My catalog</Button>{' '}
      
      </div>
  );
}

export default YouStatement;
