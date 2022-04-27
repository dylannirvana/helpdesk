import { Button } from 'react-bootstrap';

function CopyrightAdvance() {
  return (
      <div id='copyrightadvance' className='section' >
        <h1>Here is an answer.</h1>
        <p>Duis Lorem incididunt anim quis.</p>
        <Button variant="secondary" href='#home' >Living in a shotgun shack.</Button>{' '}
        {/* Removing next button reinforces that you are the end of a section */}

      </div>
  );
}

export default CopyrightAdvance;
