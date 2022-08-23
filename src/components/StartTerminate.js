import { Button } from 'react-bootstrap';

function StartTerminate() {
  return (
      <div id='startterminate' className='section' >

        <h1>Terminating your contract</h1>
        
        <p className='container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <Button variant="secondary" className='mybutton' href='https://www.bmi.com/forms/affiliation/bmi_termination_form.pdf' >Termination form</Button>{' '}

        <div className='flex'>
          <Button variant="outline-secondary" className='mybutton' href='#home' >More questions?</Button>{' '}

        {/* Removing next button reinforces that you are the end of a section */}
        </div>

       

      </div>
  );
}

export default StartTerminate;
