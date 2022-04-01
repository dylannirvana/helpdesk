// import logo from './logo.svg';
import './App.scss';
import { Button } from 'react-bootstrap';
import copyright from './copyright.png'


function Copyright() {
  return (
    <div id='copyright'>
        <h1>Understanding your Copyright</h1>
        <img className='copyright' src={copyright} alt='Copyrights explained' />
        <p>A musical copyright is first divided in two parts: the Musical Composition, and the Sound Recording. The copyright of the Sound Recording is further split into the "Writer's Share" and the "Publisher's Share." Don't forget to register your musical compositions with BMI (or other Performance Rights Organization). You can't get paid if you don't! </p>

        
        <p>BMI members can register their works <a href='#'>HERE</a> </p>

        <Button variant="secondary" href='#royalties' >More on Royalties</Button>{' '}
      </div>
  );
}

export default Copyright;
