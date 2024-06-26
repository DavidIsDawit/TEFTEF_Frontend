//import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js';
import Login from './components/login.js';
import Jobs from './components/Jobs.js';
import Navbar from './components/Navbar.js'
import {Route,Routes} from 'react-router-dom';
import Signup from './components/signup.js';
import JobsAndFreelancer from './components/Jobs&Freelancer.js';
import Freelancers from './components/Freelancers.js'
import Testimonials from './components/Testemonials.js'
import HowItWorks from './components/HowItWorks.js'
import Footer from './components/Footer.js'
import CallForAction from './components/CallForAction.js'
import PostaJob from './components/PostaJob.js'

function App() {
  return (
    
    <div className="app_cont">
       <Navbar/>
      <Routes>
        <Route path="/"   element={<Home />} />
        <Route path="/Signup"   element={<Signup/>} />
        <Route path="/Login"   element={<Login/>} />
        <Route path="PostaJob" element={<PostaJob/>}/>
        <Route path="/Freelancers" element={<Freelancers/>}></Route>
        <Route path="/FindJob" element={<Jobs/>}></Route>
      </Routes>
                
      <div className='JandF'>
      <Jobs/>
      <Freelancers/>
      </div>
       
      
      <Testimonials/>     
      <HowItWorks/> 
      <Footer/>
      <CallForAction/>
    </div>
  );
}

export default App;
