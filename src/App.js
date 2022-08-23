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
import PublisherRegister from './components/PublisherRegister';
import RegisterChange from './components/RegisterChange';
import RegisterSong from './components/RegisterSong';
import RegisterWorks from './components/RegisterCatalog';
import ServicesBank from './components/ServicesBank';
import ServicesContact from './components/ServicesContact';
import ServicesOnline from './components/ServicesOnline';
import ServicesSongview from './components/ServicesSongview';
import StartContract from './components/StartContract';
import StartSignup from './components/StartSignup';
import StartStatus from './components/StartStatus';
import StartTerminate from './components/StartTerminate';
import StartWhatDoes from './components/StartWhatDoes';
import StartWhatIs from './components/StartWhatIs';
import YouArtist from './components/YouArtist';
import YouBetter from './components/YouBetter';
import YouCatalog from './components/YouCatalog';
import YouEstate from './components/YouEstate';
import YouLearn from './components/YouLearn';
import YouLive from './components/YouLive';
import YouStatement from './components/YouStatement';
// import Carousel1 from './test/Carousel1';
// import Question1 from './test/Question1';
// import Question2 from './test/Question2';
// import Question3 from './test/Question3';
// import Question4 from './test/Question4';
// import Question5 from './test/Question5';
// import { Button } from 'react-bootstrap';

// import TestTopics from './test/TestTopics';
import Topics from './Topics';


function App() {
  return (
    <div className="App">
      <header id='home' className="section">
        {/* <TestTopics /> */}
        <Topics />
      </header>

    {/* THESE ARE THE TEST QUESTIONS */}
    {/* <Question1 />
    <Question2 />
    <Question3 />
    <Carousel1 />
    <Question4 />
    <Question5 /> */}

    {/* HERE HOWEVER ARE THE ACTUAL QUESTIONS */}
    {/* Start */}
    <StartWhatIs />
    <StartWhatDoes />
    <StartSignup />
    <StartStatus />
    <StartContract />
    <StartTerminate />

    {/* Register */}
    <RegisterSong />
    <RegisterWorks />
    <RegisterChange />

    {/* Copyright */}
    <CopyrightPerformance />
    <CopyrightPaid />
    <CopyrightCheck />
    <CopyrightAbout />
    <CopyrightIPI />
    <CopyrightRoyalty />
    <CopyrightAdvance />

    {/* License */}
    <LicensePays />
    <LicenseISRC />
    <LicenseUnauth />

    {/* Publisher */}
    <PublisherNeed />
    <PublisherMMA />
    <PublisherForeign />
    <PublisherRegister />

    {/* BMI and you */}
    <YouArtist />
    <YouLive />
    <YouLearn />
    <YouBetter />
    <YouStatement />
    <YouCatalog />
    <YouEstate />

    {/* Online services */}
    <ServicesOnline />
    <ServicesContact />
    <ServicesBank />
    <ServicesSongview />

    </div>
  );
}

export default App;
