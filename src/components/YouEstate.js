import { Button } from 'react-bootstrap';

function YouEstate() {
  return (
      <div id='youestate' className='section' >
        <h1>Here is YouEstate.</h1>
        <p>Duis Lorem incididunt anim quis.</p>
        <Button variant="secondary" className='mybutton' href='#home' >Living in a shotgun shack.</Button>{' '}
        {/* Removing next button reinforces that you are the end of a section */}

      </div>
  );
}

export default YouEstate;
