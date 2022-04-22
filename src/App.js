// import logo from './logo.svg';
import './App.scss';
import CopyrightAbout from './components/CopyrightAbout';
import CopyrightAdvance from './components/CopyrightAdvance';
import CopyrightCheck from './components/CopyrightCheck';
import CopyrightIPI from './components/CopyrightIPI';
import CopyrightPaid from './components/CopyrightPaid';
import CopyrightPerformance from './components/CopyrightPerformance';
import CopyrightRoyalty from './components/CopyrightRoyalty';
import LicenseISRC from './components/LicenseISRC';
import LicensePays from './components/LicensePays';
import LicenseUnauth from './components/LicenseUnauth';
import PublisherForeign from './components/PublisherForeign';
import PublisherMMA from './components/PublisherMMA';
import PublisherNeed from './components/PublisherNeed';
import PublisherRegiser from './components/PublisherRegister';
import Carousel1 from './test/Carousel1';
import Question1 from './test/Question1';
import Question2 from './test/Question2';
import Question3 from './test/Question3';
import Question4 from './test/Question4';
import Question5 from './test/Question5';
// import { Button } from 'react-bootstrap';

import TestTopics from './test/TestTopics';
// import Topics from './Topics';


function App() {
  return (
    <div className="App">
      <header id='home' className="section">
        <TestTopics />
        {/* <Topics /> */}
      </header>

    {/* THESE ARE THE TEST QUESTIONS */}
    <Question1 />
    <Question2 />
    <Question3 />
    <Carousel1 />
    <Question4 />
    <Question5 />

    {/* HERE HOWEVER ARE THE ACTUAL QUESTIONS */}
    {/* <CopyrightPerformance />
    <CopyrightPaid />
    <CopyrightCheck />
    <CopyrightAbout />
    <CopyrightIPI />
    <CopyrightRoyalty />
    <CopyrightAdvance />

    <LicensePays />
    <LicenseISRC />
    <LicenseUnauth />

    <PublisherNeed />
    <PublisherMMA />
    <PublisherForeign />
    <PublisherRegiser /> */}

    </div>
  );
}

export default App;
