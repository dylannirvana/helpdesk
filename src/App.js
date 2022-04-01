// import logo from './logo.svg';
import './App.scss';
// import { Button } from 'react-bootstrap';
import Answer from './Answer';
import Question from './Question';
import AnotherAnswer from './AnotherAnswer';
import Questions from './Questions';
import Ipi from './Ipi';


function App() {
  return (
    <div className="App">
      <header id='home' className="App-header">
        <Questions />
      </header>

      <Ipi />
      <Question />
      <Answer />
      <AnotherAnswer />

    </div>
  );
}

export default App;
