// import logo from './logo.svg';
import './App.scss';
// import { Button } from 'react-bootstrap';
import Answer from './Answer';
import Question from './Question';
import AnotherAnswer from './AnotherAnswer';


function App() {
  return (
    <div className="App">
      <header id='home' className="App-header">
        {/* <h1>Have any questions?</h1>
        <Button variant="secondary" href='#answer' >Well, how did I get here?</Button>{' '} */}
        <Question />
      </header>

      {/* <div id='answer'>
        <h1>Here is an answer.</h1>
        <p>Duis Lorem incididunt anim quis.</p>
        <h3>Back to the top</h3>
        <Button variant="secondary" href='#home' >Same as it ever was.</Button>{' '}
      </div> */}

      <Answer />
      <AnotherAnswer />

    </div>
  );
}

export default App;
