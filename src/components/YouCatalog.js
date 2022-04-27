import { Button } from 'react-bootstrap';

function YouCatalog() {
  return (
      <div id='youcatalog' className='section' >
        <h1>Here is YouCatalog.</h1>
        <p>Duis Lorem incididunt anim quis.</p>
        <Button variant="secondary" className='mybutton' href='#home' >Living in a shotgun shack.</Button>{' '}
        <Button variant="outline-secondary" className='mybutton' href='#youestate' >Next</Button>{' '}

      </div>
  );
}

export default YouCatalog;
