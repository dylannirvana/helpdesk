// import logo from './logo.svg';
import './App.scss';
import { Button } from 'react-bootstrap';


function Estate() {
  return (
      <div id='estate'>
        <h1>Do you have questions about heirs or estate?</h1>
        <p>According to US Copyright law, lorem Proident nulla cillum velit officia excepteur sit esse.</p>
        <p>As a BMI member, your estate information is <a href='#'>here</a>. Have you registered your compositions with <a href='#'>Library of Congress</a> </p>
        <Button variant="secondary" href='#home' >Register your Copyrights</Button>{' '}
      </div>
  );
}

export default Estate;
