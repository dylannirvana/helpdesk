import { Button } from 'react-bootstrap';

function PublisherForeign() {
  return (
    <div id='publisherforeign' className='section' >
      <h1>Neighboring Rights</h1>

      <p className='container'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      <div className='flex'>
        {/* <Button variant="secondary" className='mybutton' href='#publishermma' >MMA</Button>{' '} */}

        <Button variant="outline-secondary" className='mybutton' href='#publisherregister' >When is a publisher required?</Button>{' '}
      </div>

    </div>
  );
}

export default PublisherForeign;
