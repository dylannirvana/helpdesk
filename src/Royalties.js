// import logo from './logo.svg';
import './App.scss';
import { Button } from 'react-bootstrap';
import royalties from './royalties.png'


function Royalties() {
  return (
      <div id='royalties'>
        <h1>Understanding your Royalties</h1>
        <img className='royalties' src={royalties} alt='Royalties explained' />
        <p>There are 5 major types of musical royalties: Performance, Mechanical, Artist, Digital, and Non-Featured Artist. Performance Royalties are paid on the Musical Composition by BMI and other Performance Right Organizations. Mechanical Royalites are handled by the Mechanical Licensing Collective and Harry Fox Agency. Artist Royalties like streaming are paid by the Digital Service Providers like Spotify and Apple Music to the Distributor or Label Services Company hired by the Artist. Digital Radio Royalties are tracked by SoundExchange. And Non-featured Artist Royalties are paid by the Label or services company to SAG/AFTRA/802</p> 

        <Button variant="secondary" href='#copyright' >More on Copyright</Button>{' '}
      </div>
  );
}

export default Royalties;
