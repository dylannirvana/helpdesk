// import logo from './logo.svg';
import './App.scss';
import Carousel1 from './test/Carousel1';
import Question1 from './test/Question1';
import Question2 from './test/Question2';
import Question3 from './test/Question3';
import Question4 from './test/Question4';
import Question5 from './test/Question5';
// import { Button } from 'react-bootstrap';

import TestTopics from './test/TestTopics';
import Topics from './Topics';


function App() {
  return (
    <div className="App">
      <header id='home' className="App-header">
        <TestTopics />
        {/* <Topics /> */}
      </header>

    {/* THESE ARE THE TEST QUESTIONS */}
    {/* <Question1 />
    <Question2 />
    <Question3 /> */}
    <Carousel1 />
    {/* <Question4 />
    <Question5 /> */}

    {/* HERE HOWEVER ARE THE ACTUAL QUESTIONS */}

    </div>
  );
}

export default App;
