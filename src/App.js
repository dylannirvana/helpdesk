import logo from './logo.svg';
import './App.scss';
import { Button } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header id='home' className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h1>Have any questions?</h1>
        <Button variant="secondary" href='#answer' >Well, how did I get here?</Button>{' '}
      </header>
      <div id='answer'>
        <h1>Here is an answer.</h1>
        <p>Duis Lorem incididunt anim quis.</p>
        <h3>Back to the top</h3>
        <Button variant="secondary" href='#home' >Same as it ever was.</Button>{' '}

      </div>
    </div>
  );
}

export default App;
