import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Faculty from './components/Faculty';
import Admissions from './components/Admission';
import Gallery from './components/Gallery';
import EventPage from './components/EventPage';
import Contact from './components/Contact';  
import Birthday from './components/Birthday';
import Result from './components/Result';
import FacilityDetail from "./components/FacilityDetail";
import Loader from './components/Loader'; 

const App = () => {
  return (
    <Router>
      <Loader/>
      <Header />
      <Navbar/>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/gallery" element={<Gallery />} /> 
        <Route path="/event/:eventId" element={<EventPage />} />
        <Route path="/result" element={<Result />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/facility/:id" element={<FacilityDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
